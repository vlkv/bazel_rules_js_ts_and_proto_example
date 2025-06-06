load("@aspect_rules_js//js:defs.bzl", "js_library", "js_binary")
load("@npm//:defs.bzl", "npm_link_all_packages")
# load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("//:defs.bzl", "ts_project")

npm_link_all_packages(name = "node_modules")

ts_project(
    name = "lib",
    srcs = [
        "src/index.ts",
    ],
    declaration = True,
    tsconfig = "//:tsconfig",
    # transpiler = "tsc",
    allow_js = True,
    deps = [
        "//:node_modules/@backend/mylib",
        "//:node_modules/@types/node",
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
