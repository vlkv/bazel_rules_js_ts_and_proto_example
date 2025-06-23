// Original file: backend/proto/example/hello_api.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloReply as _example_HelloReply, HelloReply__Output as _example_HelloReply__Output } from '../example/HelloReply';
import type { HelloRequest as _example_HelloRequest, HelloRequest__Output as _example_HelloRequest__Output } from '../example/HelloRequest';

export interface HelloServerClient extends grpc.Client {
  sayHello(argument: _example_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_example_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _example_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_example_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _example_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_example_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _example_HelloRequest, callback: grpc.requestCallback<_example_HelloReply__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloServerHandlers extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<_example_HelloRequest__Output, _example_HelloReply>;
  
}

export interface HelloServerDefinition extends grpc.ServiceDefinition {
  sayHello: MethodDefinition<_example_HelloRequest, _example_HelloReply, _example_HelloRequest__Output, _example_HelloReply__Output>
}
