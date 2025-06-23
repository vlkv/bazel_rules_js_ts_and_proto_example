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
do_gen_types "example/something_else_api.proto"
do_gen_types "example/etc_api.proto"
```

TODO: Add some test rule, that may generate those *.proto -> *.ts files at runtime and then compare them with
the commited ones.
