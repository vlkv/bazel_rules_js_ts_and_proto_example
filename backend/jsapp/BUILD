load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

js_library(
    name = "lib",
    srcs = [
        "src/index.js",
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
    entry_point = "src/index.js",
    visibility = ["//visibility:public"],
)
