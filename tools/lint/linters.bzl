# NOTE: This was taken from https://github.com/aspect-build/rules_lint/blob/v1.7.0/example/tools/lint/linters.bzl
"Define linter aspects"

# NOTE: For go we use `nogo`
# NOTE: For BUILD and .bzl we use Buildifier
load("@aspect_rules_lint//lint:buf.bzl", "lint_buf_aspect")  # for proto
load("@aspect_rules_lint//lint:clang_tidy.bzl", "lint_clang_tidy_aspect")  # for c++
load("@aspect_rules_lint//lint:eslint.bzl", "lint_eslint_aspect")  # for js/ts
load("@aspect_rules_lint//lint:flake8.bzl", "lint_flake8_aspect")  # for python
load("@aspect_rules_lint//lint:lint_test.bzl", "lint_test")  # some useful stuff to create explicit linter rules
load("@aspect_rules_lint//lint:ruff.bzl", "lint_ruff_aspect")  # for python too
load("@aspect_rules_lint//lint:shellcheck.bzl", "lint_shellcheck_aspect")  #  for sh_binary, sh_library, sh_test

buf = lint_buf_aspect(
    config = Label("//tools/lint:buf.yaml"),
)

eslint = lint_eslint_aspect(
    binary = Label("//tools/lint:eslint"),
    # ESLint will resolve the configuration file by looking in the working directory first.
    # See https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-resolution
    # We must also include any other config files we expect eslint to be able to locate, e.g. tsconfigs
    configs = [
        Label("//:eslintrc"),
    ],
    rule_kinds = ["js_library", "ts_project", "ts_project_rule"],
)

eslint_test = lint_test(aspect = eslint)

flake8 = lint_flake8_aspect(
    binary = Label("//tools/lint:flake8"),
    config = Label("//tools/lint:.flake8"),
    rule_kinds = ["py_library", "py_binary", "py_test"],
)

flake8_test = lint_test(aspect = flake8)

ruff = lint_ruff_aspect(
    binary = Label("@aspect_rules_lint//lint:ruff_bin"),
    configs = [
        Label("@//tools/lint:.ruff.toml"),
    ],
)

ruff_test = lint_test(aspect = ruff)

shellcheck = lint_shellcheck_aspect(
    binary = Label("@aspect_rules_lint//lint:shellcheck_bin"),
    config = Label("@//tools/lint:.shellcheckrc"),
)

shellcheck_test = lint_test(aspect = shellcheck)

# See https://github.com/aspect-build/rules_lint/blob/0fa4d11d3b2124a999bf3f03ef35e13d046cd162/lint/clang_tidy.bzl#L412
clang_tidy = lint_clang_tidy_aspect(
    binary = Label("//tools/lint:clang_tidy"),
    global_config = [Label("//tools/lint:.clang-tidy")],
    verbose = True,
)

clang_tidy_test = lint_test(aspect = clang_tidy)
