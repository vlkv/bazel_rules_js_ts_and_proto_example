import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OtherApiClient as _example_other_OtherApiClient, OtherApiDefinition as _example_other_OtherApiDefinition } from './example/other/OtherApi';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  example: {
    other: {
      OtherApi: SubtypeConstructor<typeof grpc.Client, _example_other_OtherApiClient> & { service: _example_other_OtherApiDefinition }
      OtherRequest: MessageTypeDefinition
      OtherResponse: MessageTypeDefinition
    }
  }
}

