load("@rules_python//python:defs.bzl", "py_test")

# Taken from https://dev.to/davidb31/experimentations-on-bazel-python-3-linter-pytest-49oh
def pytest_test(name, srcs, deps = [], args = [], **kwargs):
    py_test(
        name = name,
        srcs = [
            "//backend/tools/pytest:pytest_wrapper.py",
        ] + srcs,
        main = "//backend/tools/pytest:pytest_wrapper.py",
        args = [
            "--capture=no",
            "-vvv",
        ] + args + ["$(location :%s)" % x for x in srcs],
        python_version = "PY3",
        srcs_version = "PY3",
        deps = deps + [
            "@pypi//pytest",
        ],
        **kwargs
    )
