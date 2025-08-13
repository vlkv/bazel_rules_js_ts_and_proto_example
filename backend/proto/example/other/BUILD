load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@rules_go//go:def.bzl", "go_library")
load("@rules_go//proto:def.bzl", "go_proto_library")
load("@rules_proto//proto:defs.bzl", "proto_library")
load("@rules_proto_grpc_python//:defs.bzl", "python_grpc_library")

proto_library(
    name = "other_proto",
    srcs = [
        "other_api.proto",
    ],
    strip_import_prefix = "/backend/proto",
    visibility = ["//visibility:public"],
)

js_library(
    name = "other_raw_proto",
    srcs = glob(["**/*.proto"]),
    visibility = ["//visibility:public"],
)

python_grpc_library(
    name = "other_python_grpc_proto",
    protos = [
        ":other_proto",
    ],
    visibility = ["//visibility:public"],
    deps = [
    ],
)

go_proto_library(
    name = "other_go_proto",
    compilers = ["@io_bazel_rules_go//proto:go_grpc_v2"],
    importpath = "monorepo.local/backend/proto/example/other",
    proto = ":other_proto",
    visibility = ["//visibility:public"],
)

go_library(
    name = "other",
    embed = [":other_go_proto"],
    importpath = "monorepo.local/backend/proto/example/other",
    visibility = ["//visibility:public"],
)
