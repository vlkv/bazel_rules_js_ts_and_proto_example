load("@rules_go//go:def.bzl", "go_binary", "go_library")

go_library(
    name = "goapp_lib",
    srcs = ["main.go"],
    deps = [
        "//backend/golib",
    ],
    importpath = "monorepo.local/backend/goapp",
    visibility = ["//visibility:private"],
)

go_binary(
    name = "goapp",
    embed = [":goapp_lib"],
    visibility = ["//visibility:public"],
)
