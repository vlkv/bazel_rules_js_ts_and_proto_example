load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("//tools/lint:linters.bzl", "eslint_test")

npm_link_all_packages(name = "node_modules")

js_library(
    name = "lib",
    srcs = [
        "src/index.mjs",
    ],
    visibility = ["//visibility:public"],
    deps = [
        "//:node_modules/@backend/jslib",
    ],
)

js_library(
    name = "pkg",
    srcs = ["package.json"],
    visibility = ["//visibility:public"],
    deps = [":lib"],
)

js_binary(
    name = "jsapp",
    data = [
        ":pkg",
    ],
    entry_point = "src/index.mjs",
    visibility = ["//visibility:public"],
)

# NOTE: Unfortunately ./bazelisk build //backend/jsapp does not trigger eslint on :lib
# That is why we have to manually do this!
eslint_test(
    name = "lint",
    srcs = [":lib"],
)
