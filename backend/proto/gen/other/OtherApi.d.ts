// Original file: backend/proto/other/other_api.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { OtherRequest as _other_OtherRequest, OtherRequest__Output as _other_OtherRequest__Output } from '../other/OtherRequest';
import type { OtherResponse as _other_OtherResponse, OtherResponse__Output as _other_OtherResponse__Output } from '../other/OtherResponse';

export interface OtherApiClient extends grpc.Client {
  doOtherStuff(argument: _other_OtherRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_other_OtherResponse__Output>): grpc.ClientUnaryCall;
  doOtherStuff(argument: _other_OtherRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_other_OtherResponse__Output>): grpc.ClientUnaryCall;
  doOtherStuff(argument: _other_OtherRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_other_OtherResponse__Output>): grpc.ClientUnaryCall;
  doOtherStuff(argument: _other_OtherRequest, callback: grpc.requestCallback<_other_OtherResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OtherApiHandlers extends grpc.UntypedServiceImplementation {
  doOtherStuff: grpc.handleUnaryCall<_other_OtherRequest__Output, _other_OtherResponse>;
  
}

export interface OtherApiDefinition extends grpc.ServiceDefinition {
  doOtherStuff: MethodDefinition<_other_OtherRequest, _other_OtherResponse, _other_OtherRequest__Output, _other_OtherResponse__Output>
}
