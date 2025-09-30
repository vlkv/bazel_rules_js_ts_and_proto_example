load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_image_layer", "js_library")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

ts_project(
    name = "lib",
    srcs = [
        "src/index.ts",
    ],
    allow_js = True,
    declaration = True,
    supports_workers = 0,
    transpiler = "tsc",
    tsconfig = "//:tsconfig",
    visibility = ["//visibility:public"],
    deps = [
        "//:node_modules/@backend/jslib",
        "//:node_modules/@backend/proto",  # contains generated *.d.ts files from backend/proto/gen
        "//:node_modules/@bazel/runfiles",
        "//:node_modules/@grpc/grpc-js",
        "//:node_modules/@grpc/proto-loader",
        "//:node_modules/@types/node",
        "//backend/proto:proto_raw_proto",  # contains raw *.proto files needed for TypeScript runtime
    ],
)

js_library(
    name = "pkg",
    srcs = ["package.json"],
    deps = [":lib"],
)

js_binary(
    name = "tsapp",
    data = [
        ":pkg",
    ],
    entry_point = "src/index.js",
    visibility = ["//visibility:public"],
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
    binary = ":tsapp",
    visibility = ["//visibility:public"],
)
