import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OtherApiClient as _other_OtherApiClient, OtherApiDefinition as _other_OtherApiDefinition } from './other/OtherApi';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  other: {
    OtherApi: SubtypeConstructor<typeof grpc.Client, _other_OtherApiClient> & { service: _other_OtherApiDefinition }
    OtherRequest: MessageTypeDefinition
    OtherResponse: MessageTypeDefinition
  }
}

