load("@rules_proto//proto:defs.bzl", "proto_library")
load("@aspect_rules_js//js:defs.bzl", "js_library")

proto_library(
    name = "example_proto",
    deps = [
        "//backend/proto/example/thing:thing_proto",
        "//backend/proto/example/other:other_proto",
    ],
    strip_import_prefix = "/backend/proto",
    visibility = ["//visibility:public"],
)

# NOTE: We need to wrap filegroup with a js_library because ts_project on the other side does not allow to use
# external filegroup in the data field. So, it is a hack, but officially recommended way.
js_library(
    name = "example_raw_proto",
    srcs = [
        "//backend/proto/example/thing:thing_raw_proto",
        "//backend/proto/example/other:other_raw_proto",
    ],
    visibility = ["//visibility:public"],
)


# NOTE: Cannot use python_grpc_library to aggregate two libraries into one
# load("@rules_proto_grpc_python//:defs.bzl", "python_grpc_library")

# NOTE: Tried to use py_library to aggregate two libraries into one, but with no luck
load("@rules_python//python:defs.bzl", "py_library")

py_library(
    name = "example_python_grpc_proto",
    deps = [
        "//backend/proto/example/thing:thing_python_grpc_proto",
        "//backend/proto/example/other:other_python_grpc_proto",
    ],
    visibility = ["//visibility:public"],
)
