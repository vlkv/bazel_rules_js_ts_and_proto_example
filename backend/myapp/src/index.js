const MyLib = require('@backend/mylib');

let id = MyLib.generate_uuid();
console.log("Hello, from Bazel! Generated id=" + id);
