#!/bin/bash
set -euo pipefail

PROTO_ROOT_DIR=backend/proto
OUT_DIR=backend/proto/gen/ts

do_gen_types() {
    node node_modules/@grpc/proto-loader/build/bin/proto-loader-gen-types.js \
        --keepCase --longs=String --enums=String --defaults --oneofs \
        --grpcLib=@grpc/grpc-js \
        --includeDirs=${PROTO_ROOT_DIR} \
        --outDir=${OUT_DIR} \
        --targetFileExtension=".d.ts" \
        $1
}

do_gen_types "example/thing/hello_api.proto"
do_gen_types "example/other/other_api.proto"
# TODO: Add here more *_api.proto files to generate types for them,
# you don't have to list all *.proto files here, just the 'leaf' nodes (those, containing APIs).
