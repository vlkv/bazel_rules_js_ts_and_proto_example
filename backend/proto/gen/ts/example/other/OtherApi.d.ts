// Original file: backend/proto/example/other/other_api.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { OtherRequest as _example_other_OtherRequest, OtherRequest__Output as _example_other_OtherRequest__Output } from '../../example/other/OtherRequest';
import type { OtherResponse as _example_other_OtherResponse, OtherResponse__Output as _example_other_OtherResponse__Output } from '../../example/other/OtherResponse';

export interface OtherApiClient extends grpc.Client {
  doOtherStuff(argument: _example_other_OtherRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_example_other_OtherResponse__Output>): grpc.ClientUnaryCall;
  doOtherStuff(argument: _example_other_OtherRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_example_other_OtherResponse__Output>): grpc.ClientUnaryCall;
  doOtherStuff(argument: _example_other_OtherRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_example_other_OtherResponse__Output>): grpc.ClientUnaryCall;
  doOtherStuff(argument: _example_other_OtherRequest, callback: grpc.requestCallback<_example_other_OtherResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OtherApiHandlers extends grpc.UntypedServiceImplementation {
  doOtherStuff: grpc.handleUnaryCall<_example_other_OtherRequest__Output, _example_other_OtherResponse>;
  
}

export interface OtherApiDefinition extends grpc.ServiceDefinition {
  doOtherStuff: MethodDefinition<_example_other_OtherRequest, _example_other_OtherResponse, _example_other_OtherRequest__Output, _example_other_OtherResponse__Output>
}
