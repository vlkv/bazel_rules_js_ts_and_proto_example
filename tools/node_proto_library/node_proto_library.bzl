""

load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@rules_proto//proto:defs.bzl", "ProtoInfo")

def _collect_proto_sources_impl2(ctx):
    out_files = []

    for proto in ctx.attr.protos:
        proto_info = proto[ProtoInfo]

        for f in proto_info.direct_sources:
            # NOTE: Sometimes f.path contains "/_virtual_imports/", sometimes it doesn't...

            # We take just the last filename part of the path
            path2 = f.basename

            out = ctx.actions.declare_file(path2)

            ctx.actions.symlink(
                output = out,
                target_file = f,
            )
            out_files.append(out)

    return [
        DefaultInfo(
            files = depset(out_files),
            runfiles = ctx.runfiles(files = out_files),
        ),
    ]

_collect_proto_sources = rule(
    implementation = _collect_proto_sources_impl2,
    attrs = {
        "protos": attr.label_list(providers = [ProtoInfo]),
    },
    doc = "Collects direct .proto sources from proto_library targets.",
)

def node_proto_library(name, protos, deps = [], visibility = None):
    "node_proto_library is a macro to organize *.proto files to be used in js/ts services with @grpc/proto-loader"

    collection_name = name + "__protos_collection"

    _collect_proto_sources(
        name = collection_name,
        protos = protos,
    )

    js_library(
        name = name,
        srcs = [":" + collection_name],
        deps = deps,
        visibility = visibility,
    )
