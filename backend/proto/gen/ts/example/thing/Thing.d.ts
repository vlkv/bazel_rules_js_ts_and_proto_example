// Original file: backend/proto/example/thing/thing.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../google/protobuf/Any';

export interface Thing {
  'name'?: (string);
  'payload'?: (_google_protobuf_Any | null);
}

export interface Thing__Output {
  'name': (string);
  'payload': (_google_protobuf_Any__Output | null);
}
