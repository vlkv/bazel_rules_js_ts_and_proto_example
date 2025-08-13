# How to manage external dependencies in golang project

From the https://github.com/bazel-contrib/rules_go/blob/master/examples/basic_gazelle/README.md
- Import the external package from any .go file.
- Run `bazel run @rules_go//go -- mod tidy`. This command runs go mod tidy to update go.mod using the toolchain downloaded by rules_go. This command also runs bazel mod tidy to update MODULE.bazel .
- Run `bazel run //:gazelle` again to update dependencies in BUILD.bazel files.
