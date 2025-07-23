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
    strip_import_prefix = "/backend/proto",
    visibility = ["//visibility:public"],
)

js_library(
    name = "other_raw_proto",
    srcs = glob(["**/*.proto"]),
    visibility = ["//visibility:public"],
)



load("@rules_proto_grpc_python//:defs.bzl", "python_grpc_library")

python_grpc_library(
    name = "other_python_grpc_proto",
    protos = [
        ":other_proto",
    ],
    deps = [
    ],
    visibility = ["//visibility:public"],
)
