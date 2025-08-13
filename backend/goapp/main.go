package main

import "fmt"

import "github.com/google/uuid"

import "monorepo.local/backend/golib/fortune"

func main() {
    us := uuid.NewString()
    fmt.Println("Hello, Bazel! 💚. Fortune.Get() returns " + fortune.Get() + " uuid.NewString() is " + us)
}
