load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@rules_go//go:def.bzl", "go_library")
load("@rules_go//proto:def.bzl", "go_proto_library")
load("@rules_proto//proto:defs.bzl", "proto_library")
load("@rules_proto_grpc_python//:defs.bzl", "python_grpc_library")

proto_library(
    name = "thing_proto",
    srcs = [
        "hello_api.proto",
        "thing.proto",
    ],
    visibility = ["//visibility:public"],
    deps = [
        "@protobuf//:any_proto",
        "@protobuf//:descriptor_proto",
    ],
    strip_import_prefix = "/backend/proto",
)

js_library(
    name = "thing_raw_proto",
    srcs = glob(["**/*.proto"]),
    visibility = ["//visibility:public"],
)

python_grpc_library(
    name = "thing_python_grpc_proto",
    protos = [
        ":thing_proto",
    ],
    visibility = ["//visibility:public"],
    deps = [
    ],
)

go_proto_library(
    name = "thing_go_proto",
    compilers = ["@io_bazel_rules_go//proto:go_grpc_v2"],
    importpath = "monorepo.local/backend/proto/example/thing",
    proto = ":thing_proto",
    visibility = ["//visibility:public"],
    deps = ["//example/thing:thing_proto"],
)

go_library(
    name = "thing",
    embed = [":thing_go_proto"],
    importpath = "monorepo.local/backend/proto/example/thing",
    visibility = ["//visibility:public"],
)
