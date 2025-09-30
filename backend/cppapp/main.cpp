#include <iostream>
using namespace std;

namespace {
void f() {}
}

// ./bazel-bin/tools/lint/clang_tidy ./backend/cppapp/main.cpp  -checks="clang-analyzer-*,bugprone-*,modernize-*,cppcoreguidelines-*" -- -std=c++20
int main() {
    f();
    const int x = 42;
    const int y = (int)x;

    const int b = 0; // TODO: Remove const to see how clang-tidy works

    cout << "Hello, from cpp! y=" << y << " b=" << b << '\n';
    return 0;
}
