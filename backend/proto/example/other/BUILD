load("@rules_proto//proto:defs.bzl", "proto_library")
load("@aspect_rules_js//js:defs.bzl", "js_library")

proto_library(
    name = "other_proto",
    srcs = [
        "other_api.proto",
    ],
    deps = [
        "@protobuf//:any_proto",
        "@protobuf//:descriptor_proto",
    ],
    visibility = ["//visibility:public"],
)

js_library(
    name = "other_raw_proto",
    srcs = glob(["**/*.proto"]),
    visibility = ["//visibility:public"],
)
