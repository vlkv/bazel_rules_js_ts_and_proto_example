load("@npm//:defs.bzl", "npm_link_all_packages")
npm_link_all_packages(name = "node_modules")

load("@aspect_rules_js//js:defs.bzl", "js_library")

js_library(
    name = "lib",
    srcs = [
        "src/index.d.ts",
        "src/index.js",
        "src/mylib.js",
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
