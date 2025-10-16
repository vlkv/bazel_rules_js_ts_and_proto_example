load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@rules_python//python:defs.bzl", "py_library")

# NOTE: We need to wrap filegroup with a js_library because ts_project on the other side does not allow to use
# external filegroup in the data field. So, it is a hack, but officially recommended way.
js_library(
    name = "example_raw_proto",
    srcs = [
        "//backend/proto/example/other:other_raw_proto",
        "//backend/proto/example/thing:thing_raw_proto",
    ],
    visibility = ["//visibility:public"],
)

# NOTE: Cannot use python_grpc_library to aggregate two libraries into one
# load("@rules_proto_grpc_python//:defs.bzl", "python_grpc_library")

py_library(
    name = "example_python_grpc_proto",
    visibility = ["//visibility:public"],
    deps = [
        "//backend/proto/example/other:other_python_grpc_proto",
        "//backend/proto/example/thing:thing_python_grpc_proto",
    ],
)
