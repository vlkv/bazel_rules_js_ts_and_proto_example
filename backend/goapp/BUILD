load("@rules_go//go:def.bzl", "go_binary", "go_library")

go_library(
    name = "goapp_lib",
    srcs = ["main.go"],
    importpath = "monorepo.local/backend/goapp",
    visibility = ["//visibility:private"],
    deps = [
        "//backend/golib/fortune",
    ],
)

go_binary(
    name = "goapp",
    embed = [":goapp_lib"],
    visibility = ["//visibility:public"],
)
