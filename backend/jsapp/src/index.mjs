import { generate_uuid } from '@backend/jslib';

// ...
const x = 42;  // This is unused var
let id = generate_uuid();
console.log("Hello, from Bazel! Generated id=" + id);
