// Copyright 2021-2024 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v2.0.0-alpha.4 with parameter "ts_nocheck=false,target=js+dts,import_extension=.js"
// @generated from file google/protobuf/unittest_features.proto (package pb, syntax proto2)
/* eslint-disable */

import { enumDesc, extDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/protobuf/unittest_features.proto.
 */
export const file_google_protobuf_unittest_features = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvcHJvdG9idWYvdW5pdHRlc3RfZmVhdHVyZXMucHJvdG8SAnBiIrsBCgtUZXN0TWVzc2FnZRpZCgZOZXN0ZWQyTwoLdGVzdF9uZXN0ZWQSGy5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldBiNTiABKAsyEC5wYi5UZXN0RmVhdHVyZXNSCnRlc3ROZXN0ZWQyUQoMdGVzdF9tZXNzYWdlEhsuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQYjk4gASgLMhAucGIuVGVzdEZlYXR1cmVzUgt0ZXN0TWVzc2FnZSLbCgoMVGVzdEZlYXR1cmVzEnsKDGZpbGVfZmVhdHVyZRgBIAEoDjIPLnBiLkVudW1GZWF0dXJlQlSIAQGYAQGiAQsSBlZBTFVFMRiEB6IBCxIGVkFMVUUyGOcHogELEgZWQUxVRTMY6AeiAQwSBlZBTFVFNBidjQaiAQwSBlZBTFVFNRiejQayAQMI6AcSTAoXZXh0ZW5zaW9uX3JhbmdlX2ZlYXR1cmUYAiABKA4yDy5wYi5FbnVtRmVhdHVyZUIaiAEBmAECogELEgZWQUxVRTEYhAeyAQMI6AcSRAoPbWVzc2FnZV9mZWF0dXJlGAMgASgOMg8ucGIuRW51bUZlYXR1cmVCGogBAZgBA6IBCxIGVkFMVUUxGIQHsgEDCOgHEkIKDWZpZWxkX2ZlYXR1cmUYBCABKA4yDy5wYi5FbnVtRmVhdHVyZUIaiAEBmAEEogELEgZWQUxVRTEYhAeyAQMI6AcSQgoNb25lb2ZfZmVhdHVyZRgFIAEoDjIPLnBiLkVudW1GZWF0dXJlQhqIAQGYAQWiAQsSBlZBTFVFMRiEB7IBAwjoBxJBCgxlbnVtX2ZlYXR1cmUYBiABKA4yDy5wYi5FbnVtRmVhdHVyZUIaiAEBmAEGogELEgZWQUxVRTEYhAeyAQMI6AcSRwoSZW51bV9lbnRyeV9mZWF0dXJlGAcgASgOMg8ucGIuRW51bUZlYXR1cmVCGogBAZgBB6IBCxIGVkFMVUUxGIQHsgEDCOgHEkQKD3NlcnZpY2VfZmVhdHVyZRgIIAEoDjIPLnBiLkVudW1GZWF0dXJlQhqIAQGYAQiiAQsSBlZBTFVFMRiEB7IBAwjoBxJDCg5tZXRob2RfZmVhdHVyZRgJIAEoDjIPLnBiLkVudW1GZWF0dXJlQhqIAQGYAQmiAQsSBlZBTFVFMRiEB7IBAwjoBxJdChBtdWx0aXBsZV9mZWF0dXJlGAogASgOMg8ucGIuRW51bUZlYXR1cmVCMogBAZgBAZgBBJgBA5gBBpgBB5gBCJgBCZgBBZgBAqIBCxIGVkFMVUUxGIQHsgEDCOgHEkIKEmJvb2xfZmllbGRfZmVhdHVyZRgLIAEoCEImiAEBmAEEogEKEgVmYWxzZRiEB6IBChIEdHJ1ZRidjQayAQMI6AcSWwoOc291cmNlX2ZlYXR1cmUYDyABKA4yDy5wYi5FbnVtRmVhdHVyZUIyiAECmAEBmAEEmAEDmAEGmAEHmAEImAEJmAEFmAECogELEgZWQUxVRTEYhAeyAQMI6AcSXAoPc291cmNlX2ZlYXR1cmUyGBAgASgOMg8ucGIuRW51bUZlYXR1cmVCMogBApgBAZgBBJgBA5gBBpgBB5gBCJgBCZgBBZgBAqIBCxIGVkFMVUUxGIQHsgEDCOgHEo0BCg9yZW1vdmVkX2ZlYXR1cmUYESABKA4yDy5wYi5FbnVtRmVhdHVyZUJjiAEBmAEBmAEEogELEgZWQUxVRTEYhAeiAQsSBlZBTFVFMhjoB6IBCxIGVkFMVUUzGOkHsgEtCOgHEOgHGiJDdXN0b20gZmVhdHVyZSBkZXByZWNhdGlvbiB3YXJuaW5nIOkHElQKDmZ1dHVyZV9mZWF0dXJlGBIgASgOMg8ucGIuRW51bUZlYXR1cmVCK4gBAZgBAZgBBKIBCxIGVkFMVUUxGIQHogELEgZWQUxVRTIY6QeyAQMI6QcSVwoObGVnYWN5X2ZlYXR1cmUYEyABKA4yDy5wYi5FbnVtRmVhdHVyZUIuiAEBmAEBmAEEogELEgZWQUxVRTEYhAeiAQsSBlZBTFVFMhjoB7IBBgjmByDoByrJAgoLRW51bUZlYXR1cmUSHQoZVEVTVF9FTlVNX0ZFQVRVUkVfVU5LTk9XThAAEgoKBlZBTFVFMRABEgoKBlZBTFVFMhACEgoKBlZBTFVFMxADEgoKBlZBTFVFNBAEEgoKBlZBTFVFNRAFEgoKBlZBTFVFNhAGEgoKBlZBTFVFNxAHEgoKBlZBTFVFOBAIEgoKBlZBTFVFORAJEgsKB1ZBTFVFMTAQChILCgdWQUxVRTExEAsSCwoHVkFMVUUxMhAMEgsKB1ZBTFVFMTMQDRILCgdWQUxVRTE0EA4SCwoHVkFMVUUxNRAPEhsKE1ZBTFVFX0VNUFRZX1NVUFBPUlQQYhoCIgASRAoMVkFMVUVfRlVUVVJFEGMaMiIwCJ2NBhCejQYaIkN1c3RvbSBmZWF0dXJlIGRlcHJlY2F0aW9uIHdhcm5pbmcgn40GOkIKBHRlc3QSGy5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldBiPTiABKAsyEC5wYi5UZXN0RmVhdHVyZXNSBHRlc3Q", [file_google_protobuf_descriptor]);

/**
 * Describes the message pb.TestMessage.
 * Use `create(TestMessageSchema)` to create a new message.
 */
export const TestMessageSchema = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_features, 0);

/**
 * Describes the message pb.TestMessage.Nested.
 * Use `create(TestMessage_NestedSchema)` to create a new message.
 */
export const TestMessage_NestedSchema = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_features, 0, 0);

/**
 * @generated from extension: optional pb.TestFeatures test_nested = 9997;
 */
export const TestMessage_Nested_test_nested = /*@__PURE__*/
  extDesc(file_google_protobuf_unittest_features, 0, 0, 0);

/**
 * @generated from extension: optional pb.TestFeatures test_message = 9998;
 */
export const TestMessage_test_message = /*@__PURE__*/
  extDesc(file_google_protobuf_unittest_features, 0, 0);

/**
 * Describes the message pb.TestFeatures.
 * Use `create(TestFeaturesSchema)` to create a new message.
 */
export const TestFeaturesSchema = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_features, 1);

/**
 * Describes the enum pb.EnumFeature.
 */
export const EnumFeatureSchema = /*@__PURE__*/
  enumDesc(file_google_protobuf_unittest_features, 0);

/**
 * @generated from enum pb.EnumFeature
 */
export const EnumFeature = /*@__PURE__*/
  tsEnum(EnumFeatureSchema);

/**
 * @generated from extension: optional pb.TestFeatures test = 9999;
 */
export const test = /*@__PURE__*/
  extDesc(file_google_protobuf_unittest_features, 0);

