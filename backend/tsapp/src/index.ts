import { generate_uuid as gu } from '@backend/jslib';
import { loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { runfiles } from '@bazel/runfiles';
import type { Thing } from '@backend/proto/gen/example/Thing';

const thingProtoPath = runfiles.resolveWorkspaceRelative('backend/proto/example/thing.proto');
console.log('Proto path:', thingProtoPath);

const protoDef = loadSync(runfiles.resolveWorkspaceRelative('backend/proto/example/thing.proto'), {
    keepCase: true,
    longs: String,
    enums: Number,
    defaults: true,
    oneofs: true,
    includeDirs: [runfiles.resolveWorkspaceRelative('backend/proto/example/')],
});
let proto = (loadPackageDefinition(protoDef)['example'] as any);
console.log('proto has: ' + Object.keys(proto));

let th: Thing = {
    name: "123",
    // sdfdf: 123,
};
let id: string = gu();
console.log("Hello, from TypeScript app! Generated id=" + id + " th.name=" + th.name);
