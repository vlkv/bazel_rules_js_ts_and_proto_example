load("@aspect_rules_js//js:defs.bzl", "js_library", "js_binary", "js_image_layer")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")

npm_link_all_packages(name = "node_modules")

ts_project(
    name = "lib",
    srcs = [
        "src/index.ts",
    ],
    declaration = True,
    tsconfig = "//:tsconfig",
    transpiler = "tsc",
    allow_js = True,
    supports_workers = 0,
    deps = [
        "//:node_modules/@backend/jslib",
        "//:node_modules/@backend/proto",
        "//backend/proto:proto_files_lib",
        "//:node_modules/@bazel/runfiles",
        "//:node_modules/@types/node",
        "//:node_modules/@grpc/grpc-js",
        "//:node_modules/@grpc/proto-loader",
    ],
    visibility = ["//visibility:public"],
)

js_library(
    name = "pkg",
    srcs = ["package.json"],
    deps = [":lib"],
)

js_binary(
    name = "main",
    data = [
        ":pkg",
    ],
    visibility = ["//visibility:public"],
    entry_point = "src/index.js",
)

# This rule creates several *.tar.gz files:
#   bazel-bin/backend/tsapp/layers_node.tar.gz
#   bazel-bin/backend/tsapp/layers_package_store_3p.tar.gz
#   bazel-bin/backend/tsapp/layers_package_store_1p.tar.gz
#   bazel-bin/backend/tsapp/layers_node_modules.tar.gz
#   bazel-bin/backend/tsapp/layers_app.tar.gz
# unpack all of them to ./dist and you will have a working distribution of tsapp.
# ALSO: You may use rules_oci to build docker images.
js_image_layer(
    name = "layers",
    binary = ":main",
    visibility = ["//visibility:public"],
)
