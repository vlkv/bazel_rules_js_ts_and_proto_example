load("@rules_proto//proto:defs.bzl", "proto_library")
load("@aspect_rules_js//js:defs.bzl", "js_library", "js_binary")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

proto_library(
    name = "protos",
    srcs = [
        "example/thing.proto",
        "example/hello_api.proto",
    ],
    deps = [
        "@protobuf//:any_proto",
        "@protobuf//:descriptor_proto",
    ],
)

filegroup(
    name = "proto_files",
    srcs = glob(["**/*.proto"]),
)

# NOTE: We need to wrap filegroup with a js_library because ts_project on the other side does not allow to use
# external filegroup in the data field. So, it is a hack, but officially recommended way.
js_library(
    name = "proto_files_lib",
    data = [":proto_files"],
    visibility = ["//visibility:public"],
)

# NOTE: We need to wrap filegroup with a js_library because ts_project on the other side does not allow to use
# external filegroup in the data field. So, it is a hack, but officially recommended way.
js_library(
    name = "lib",
    srcs = glob(["gen/**/*.ts"]),
    visibility = ["//visibility:public"],
)

js_library(
    name = "pkg",
    srcs = ["package.json"],
    visibility = ["//visibility:public"],
    deps = [":lib"],
)
