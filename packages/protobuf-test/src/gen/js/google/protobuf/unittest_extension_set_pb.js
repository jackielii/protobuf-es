// Copyright 2021-2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// This file contains messages for testing extensions.

// @generated by protoc-gen-es v1.6.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_extension_set.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import { proto2 } from "@bufbuild/protobuf";

/**
 * A message with message_set_wire_format.
 *
 * @generated from message protobuf_unittest.TestExtensionSet
 */
export const TestExtensionSet = proto2.makeMessageType(
  "protobuf_unittest.TestExtensionSet",
  [],
);

/**
 * @generated from message protobuf_unittest.TestExtensionSetContainer
 */
export const TestExtensionSetContainer = proto2.makeMessageType(
  "protobuf_unittest.TestExtensionSetContainer",
  () => [
    { no: 1, name: "extension", kind: "message", T: TestExtensionSet, opt: true },
  ],
);

