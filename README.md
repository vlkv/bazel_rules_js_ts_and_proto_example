# How to run example app
```
bazel run //backend/tsapp:main
```

# Regenerate *.d.ts after changing *.proto
At the moment, you have to manually call
```sh
./backend/proto/proto_loader_gen_types.sh
```
And commit all the generated files.

# Where get more info
- rules_js docs: https://github.com/aspect-build/rules_js/tree/main/docs
- https://github.com/aspect-build/bazel-examples/tree/main/pnpm-workspaces
- https://github.com/grpc/grpc-node/blob/master/packages/proto-loader/README.md#generating-typescript-types
- ...

# How to call pnpm standalone of bazel
First, install it (you need 8.6.7 or compatible):
```
npm i -g pnpm@8
```

Second, call it, like:
```
pnpm i
```

or install some library:
```
pnpm i uuid
```

