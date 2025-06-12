load("@aspect_rules_js//js:defs.bzl", "js_library", "js_binary")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

js_library(
    name = "lib",
    srcs = [
        "src/index.js",
    ],
    deps = [
        "//:node_modules/@backend/jslib",
    ],
    visibility = ["//visibility:public"],
)

js_library(
    name = "pkg",
    srcs = ["package.json"],
    visibility = ["//visibility:public"],
    deps = [":lib"],
)

js_binary(
    name = "main",
    data = [
        ":pkg",
    ],
    visibility = ["//visibility:public"],
    entry_point = "src/index.js",
)
