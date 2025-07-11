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
    ],
)
