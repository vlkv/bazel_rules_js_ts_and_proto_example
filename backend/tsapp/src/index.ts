import { generate_uuid as gu } from '@backend/jslib';
import type { Thing } from '@backend/proto/example/thing/Thing';
import { runfiles } from '@bazel/runfiles';
import { loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';

const thingProtoPath = runfiles.resolveWorkspaceRelative('backend/proto/example/thing/thing.proto');
console.log('Proto path:', thingProtoPath);

let x = 42;
if (x == 5) {
    // ...
}

const protoDef = loadSync(runfiles.resolveWorkspaceRelative('backend/proto/example/thing/thing.proto'), {
    keepCase: true,
    longs: String,
    enums: Number,
    defaults: true,
    oneofs: true,
    includeDirs: [runfiles.resolveWorkspaceRelative('backend/proto/')],
});
let proto = (loadPackageDefinition(protoDef)['example'] as any);
console.log('proto has: ' + Object.keys(proto));

let th: Thing = {
    name: "123",
    // sdfdf: 123,
};
let id: string = gu();
console.log("Hello, from TypeScript app! Generated id=" + id + " th.name=" + th.name);
