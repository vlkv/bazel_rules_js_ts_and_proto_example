package main

import "fmt"

// import "github.com/google/uuid"

// import "example.com/backend/golib/fortune"
import "monorepo.local/backend/golib/fortune"

func main() {
    fmt.Println("Hello, Bazel! 💚. Fortune.Get() returns " + fortune.Get())
}
