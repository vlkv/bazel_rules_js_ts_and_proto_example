load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@aspect_rules_jest//jest:defs.bzl", "jest_test")

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

jest_test(
    name = "test",
    node_modules = "//:node_modules",
    config = "jest.config.js",
    data = [
        "test/tmp.test.js",
        "//:node_modules/jest",
        "//:node_modules/@jest/core",
        "//:node_modules/jest-cli",
        "//:node_modules/jest-junit",
        "//:node_modules/jest-haste-map",
    ],
)
