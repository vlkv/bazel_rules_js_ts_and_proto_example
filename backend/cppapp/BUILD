load("@rules_cc//cc:cc_binary.bzl", "cc_binary")
load("//tools/lint:linters.bzl", "clang_tidy_test")

cc_binary(
    name = "cppapp",
    srcs = ["main.cpp"],
)

clang_tidy_test(
    name = "lint",
    srcs = [
        ":cppapp",
    ],
)
