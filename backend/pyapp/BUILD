load("@aspect_rules_py//py:defs.bzl", "py_binary")
load("//tools/pytest:pytest_test.bzl", "pytest_test")

py_binary(
    name = "pyapp",
    srcs = ["main.py"],
    main = "main.py",
    deps = [
        "@pypi//requests",
    ],
)

pytest_test(
    name = "test",
    srcs = [
        "main_test.py",
    ],
    imports = ["."],
    deps = [
        ":pyapp",
        "//backend/proto/example/thing:thing_python_grpc_proto",
        "//backend/proto/example/other:other_python_grpc_proto",
        # TODO: Need some sort of a mega-library that includes both thing and other stuff:
        # "//backend/proto/example:example_python_grpc_proto",
    ],
)
