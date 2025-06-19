#!/bin/bash

PROTO_ROOT_DIR=backend/proto
OUT_DIR=backend/tsapp/gen

npx proto-loader-gen-types --keepCase --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --includeDirs=${PROTO_ROOT_DIR} --outDir=${OUT_DIR} example/hello_api.proto
