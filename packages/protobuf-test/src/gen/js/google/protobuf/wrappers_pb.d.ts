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

// @generated by protoc-gen-es v1.6.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/wrappers.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 *
 * @generated from message google.protobuf.DoubleValue
 */
export declare class DoubleValue extends Message<DoubleValue> {
  /**
   * The double value.
   *
   * @generated from field: double value = 1;
   */
  value: number;

  constructor(data?: PartialMessage<DoubleValue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.DoubleValue";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: number): DoubleValue,
    unwrapField(value: DoubleValue): number,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DoubleValue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DoubleValue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DoubleValue;

  static equals(a: DoubleValue | PlainMessage<DoubleValue> | undefined, b: DoubleValue | PlainMessage<DoubleValue> | undefined): boolean;
}

/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 *
 * @generated from message google.protobuf.FloatValue
 */
export declare class FloatValue extends Message<FloatValue> {
  /**
   * The float value.
   *
   * @generated from field: float value = 1;
   */
  value: number;

  constructor(data?: PartialMessage<FloatValue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.FloatValue";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: number): FloatValue,
    unwrapField(value: FloatValue): number,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FloatValue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FloatValue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FloatValue;

  static equals(a: FloatValue | PlainMessage<FloatValue> | undefined, b: FloatValue | PlainMessage<FloatValue> | undefined): boolean;
}

/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 *
 * @generated from message google.protobuf.Int64Value
 */
export declare class Int64Value extends Message<Int64Value> {
  /**
   * The int64 value.
   *
   * @generated from field: int64 value = 1;
   */
  value: bigint;

  constructor(data?: PartialMessage<Int64Value>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.Int64Value";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: bigint): Int64Value,
    unwrapField(value: Int64Value): bigint,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int64Value;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int64Value;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int64Value;

  static equals(a: Int64Value | PlainMessage<Int64Value> | undefined, b: Int64Value | PlainMessage<Int64Value> | undefined): boolean;
}

/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 *
 * @generated from message google.protobuf.UInt64Value
 */
export declare class UInt64Value extends Message<UInt64Value> {
  /**
   * The uint64 value.
   *
   * @generated from field: uint64 value = 1;
   */
  value: bigint;

  constructor(data?: PartialMessage<UInt64Value>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.UInt64Value";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: bigint): UInt64Value,
    unwrapField(value: UInt64Value): bigint,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UInt64Value;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UInt64Value;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UInt64Value;

  static equals(a: UInt64Value | PlainMessage<UInt64Value> | undefined, b: UInt64Value | PlainMessage<UInt64Value> | undefined): boolean;
}

/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 *
 * @generated from message google.protobuf.Int32Value
 */
export declare class Int32Value extends Message<Int32Value> {
  /**
   * The int32 value.
   *
   * @generated from field: int32 value = 1;
   */
  value: number;

  constructor(data?: PartialMessage<Int32Value>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.Int32Value";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: number): Int32Value,
    unwrapField(value: Int32Value): number,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int32Value;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int32Value;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int32Value;

  static equals(a: Int32Value | PlainMessage<Int32Value> | undefined, b: Int32Value | PlainMessage<Int32Value> | undefined): boolean;
}

/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 *
 * @generated from message google.protobuf.UInt32Value
 */
export declare class UInt32Value extends Message<UInt32Value> {
  /**
   * The uint32 value.
   *
   * @generated from field: uint32 value = 1;
   */
  value: number;

  constructor(data?: PartialMessage<UInt32Value>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.UInt32Value";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: number): UInt32Value,
    unwrapField(value: UInt32Value): number,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UInt32Value;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UInt32Value;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UInt32Value;

  static equals(a: UInt32Value | PlainMessage<UInt32Value> | undefined, b: UInt32Value | PlainMessage<UInt32Value> | undefined): boolean;
}

/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 *
 * @generated from message google.protobuf.BoolValue
 */
export declare class BoolValue extends Message<BoolValue> {
  /**
   * The bool value.
   *
   * @generated from field: bool value = 1;
   */
  value: boolean;

  constructor(data?: PartialMessage<BoolValue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.BoolValue";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: boolean): BoolValue,
    unwrapField(value: BoolValue): boolean,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BoolValue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BoolValue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BoolValue;

  static equals(a: BoolValue | PlainMessage<BoolValue> | undefined, b: BoolValue | PlainMessage<BoolValue> | undefined): boolean;
}

/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 *
 * @generated from message google.protobuf.StringValue
 */
export declare class StringValue extends Message<StringValue> {
  /**
   * The string value.
   *
   * @generated from field: string value = 1;
   */
  value: string;

  constructor(data?: PartialMessage<StringValue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.StringValue";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: string): StringValue,
    unwrapField(value: StringValue): string,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringValue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringValue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringValue;

  static equals(a: StringValue | PlainMessage<StringValue> | undefined, b: StringValue | PlainMessage<StringValue> | undefined): boolean;
}

/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 *
 * @generated from message google.protobuf.BytesValue
 */
export declare class BytesValue extends Message<BytesValue> {
  /**
   * The bytes value.
   *
   * @generated from field: bytes value = 1;
   */
  value: Uint8Array;

  constructor(data?: PartialMessage<BytesValue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.BytesValue";
  static readonly fields: FieldList;

  static readonly fieldWrapper: {
    wrapField(value: Uint8Array): BytesValue,
    unwrapField(value: BytesValue): Uint8Array,
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BytesValue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BytesValue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BytesValue;

  static equals(a: BytesValue | PlainMessage<BytesValue> | undefined, b: BytesValue | PlainMessage<BytesValue> | undefined): boolean;
}

