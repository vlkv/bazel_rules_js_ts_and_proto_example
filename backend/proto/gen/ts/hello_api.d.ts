import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloServerClient as _example_thing_HelloServerClient, HelloServerDefinition as _example_thing_HelloServerDefinition } from './example/thing/HelloServer';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  example: {
    thing: {
      HelloReply: MessageTypeDefinition
      HelloRequest: MessageTypeDefinition
      HelloServer: SubtypeConstructor<typeof grpc.Client, _example_thing_HelloServerClient> & { service: _example_thing_HelloServerDefinition }
      Thing: MessageTypeDefinition
    }
  }
  google: {
    protobuf: {
      Any: MessageTypeDefinition
      DescriptorProto: MessageTypeDefinition
      Edition: EnumTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      ExtensionRangeOptions: MessageTypeDefinition
      FeatureSet: MessageTypeDefinition
      FeatureSetDefaults: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldOptions: MessageTypeDefinition
      FileDescriptorProto: MessageTypeDefinition
      FileDescriptorSet: MessageTypeDefinition
      FileOptions: MessageTypeDefinition
      GeneratedCodeInfo: MessageTypeDefinition
      MessageOptions: MessageTypeDefinition
      MethodDescriptorProto: MessageTypeDefinition
      MethodOptions: MessageTypeDefinition
      OneofDescriptorProto: MessageTypeDefinition
      OneofOptions: MessageTypeDefinition
      ServiceDescriptorProto: MessageTypeDefinition
      ServiceOptions: MessageTypeDefinition
      SourceCodeInfo: MessageTypeDefinition
      SymbolVisibility: EnumTypeDefinition
      UninterpretedOption: MessageTypeDefinition
    }
  }
}

