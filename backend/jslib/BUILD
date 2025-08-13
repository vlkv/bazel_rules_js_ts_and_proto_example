load("@aspect_rules_jest//jest:defs.bzl", "jest_test")
load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

js_library(
    name = "lib",
    srcs = [
        "src/index.d.ts",
        "src/index.js",
        "src/jslib.js",
    ],
    visibility = ["//visibility:public"],
    deps = [
        "//:node_modules/uuid",
    ],
)

js_library(
    name = "pkg",
    srcs = ["package.json"],
    visibility = ["//visibility:public"],
    deps = [":lib"],
)

jest_test(
    name = "test",
    config = "jest.config.js",
    data = [
        "test/tmp.test.js",
    ],
    node_modules = "//:node_modules",
)
