load("@aspect_rules_jest//jest:defs.bzl", "jest_test")
load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

js_library(
    name = "lib",
    srcs = [
        "src/index.d.ts",
        "src/index.mjs",
        "src/jslib.mjs",
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

# See https://github.com/aspect-build/rules_jest/tree/main/example/esm
# And this https://jestjs.io/docs/ecmascript-modules
jest_test(
    name = "test",
    config = "jest.config.mjs",
    data = [
        "test/jslib.test.mjs",
        ":lib",
    ],
    node_modules = "//:node_modules",
    node_options = [
        "--experimental-vm-modules",
    ],
)
