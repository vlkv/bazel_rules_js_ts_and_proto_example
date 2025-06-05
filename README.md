# How to run example app
```
bazel run //backend/myapp:main
```

# Where get more info
- rules_js docs: https://github.com/aspect-build/rules_js/tree/main/docs
- https://github.com/aspect-build/bazel-examples/tree/main/pnpm-workspaces
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

