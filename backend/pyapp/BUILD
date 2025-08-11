load("@rules_python//python:defs.bzl", "py_binary")

py_binary(
  name = "main",
  srcs = ["main.py"],
  deps = [
      "@pypi//requests",
  ]
)

load("//backend/tools/pytest:pytest_test.bzl", "pytest_test")

pytest_test(
    name = "test",
    srcs = [
        "main_test.py",
    ],
    deps = [
        ":main",
        "//backend/proto/example/thing:thing_python_grpc_proto",
        "//backend/proto/example/other:other_python_grpc_proto",
        # TODO: Need some sort of a mega-library that includes both thing and other stuff:
        # "//backend/proto/example:example_python_grpc_proto",
    ],
    imports = ["."],
)
