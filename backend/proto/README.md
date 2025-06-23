## ATTENTION 1

Every time contents of *.proto files change, you need to manually call (from monorepo root):
```zsh
./backend/proto/proto_loader_gen_types.sh
```
This command will regenerate all *.ts definitions in the `//backend/proto/gen/` dir. After that you have to
commit those changes into git.

Also, you may need to edit `proto_loader_gen_types.sh` this script adding more *_api.proto files there...
See lines similar to:
```bash
do_gen_types "example/hello_api.proto"
do_gen_types "other/other_api.proto"
# ...
```
After you edit `proto_loader_gen_types.sh`, you have to edit `index.d.ts` too, to add re-export lines similar to:
```ts
export type * as hello_api from 'hello_api';
export type * as other_api from 'other_api';
// ...
```

TODO: Add some test rule, that may generate those *.proto -> *.ts files at runtime and then compare them with
the commited ones.
