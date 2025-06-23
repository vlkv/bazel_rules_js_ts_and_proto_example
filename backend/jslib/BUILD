load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_js//js:defs.bzl", "js_library")

npm_link_all_packages(name = "node_modules")

js_library(
    name = "lib",
    srcs = [
        "src/index.d.ts",
        "src/index.js",
        "src/jslib.js",
    ],
    deps = [
        "//:node_modules/uuid",
    ],
    visibility = ["//visibility:public"],
)

js_library(
    name = "pkg",
    srcs = ["package.json"],
    visibility = ["//visibility:public"],
    deps = [":lib"],
)
