import { generate_uuid as gu } from '@backend/jslib';
import { loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { runfiles } from '@bazel/runfiles';

const thingProtoPath = runfiles.resolveWorkspaceRelative('backend/proto/example/thing.proto');
console.log('Proto path:', thingProtoPath);

// output all envs
for (const [key, value] of Object.entries(process.env)) {
    console.log(`${key}=${value}`);
}

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

let id: string = gu();
console.log("Hello, from TypeScript app! Generated id=" + id);
