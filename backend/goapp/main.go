package main

import "fmt"

import "github.com/google/uuid"

import "monorepo.local/backend/golib/fortune"
import "github.com/shopspring/decimal"

func main() {
    us := uuid.NewString()
    fmt.Println("Hello, Bazel! 💚. Fortune.Get() returns " + fortune.Get() + " uuid.NewString() is " + us)
    d, _ := decimal.NewFromString("-123.4567")
    fmt.Println("Decimal is " + d.String())
}
