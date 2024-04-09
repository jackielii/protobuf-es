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

import { Edition } from "@bufbuild/protobuf/next/wkt";
import type { DescFile, DescComments } from "@bufbuild/protobuf";
import { getPackageComments, getSyntaxComments } from "../source-code-info.js";

export function makeFilePreamble(
  file: DescFile,
  pluginName: string,
  pluginVersion: string,
  parameter: string,
  tsNoCheck: boolean,
): string {
  const builder: string[] = [];
  const trimSuffix = (str: string, suffix: string): string =>
    str.endsWith(suffix) ? str.substring(0, str.length - suffix.length) : str;
  const writeLeadingComments = (comments: DescComments) => {
    for (let comment of comments.leadingDetached) {
      comment = trimSuffix(comment, "\n");
      for (const line of comment.split("\n")) {
        builder.push(`//${line}\n`);
      }
      builder.push("\n");
    }
    if (comments.leading !== undefined) {
      const comment = trimSuffix(comments.leading, "\n");
      for (const line of comment.split("\n")) {
        builder.push(`//${line}\n`);
      }
      builder.push("\n");
    }
  };
  writeLeadingComments(getSyntaxComments(file));
  builder.push(`// @generated by ${pluginName} ${pluginVersion}`);
  if (parameter !== "") {
    builder.push(` with parameter "${parameter}"`);
  }
  builder.push("\n");
  builder.push(`// @generated from file ${file.name}.proto (`);
  if (file.proto.package.length > 0) {
    builder.push(`package ${file.proto.package}, `);
  }
  switch (file.edition) {
    case Edition.EDITION_PROTO2:
      builder.push(`syntax proto2)\n`);
      break;
    case Edition.EDITION_PROTO3:
      builder.push(`syntax proto3)\n`);
      break;
    default: {
      const editionString = Edition[file.edition] as string | undefined;
      if (typeof editionString == "string") {
        const e = editionString.replace("EDITION_", "").toLowerCase();
        builder.push(`edition ${e})\n`);
      } else {
        builder.push(`unknown edition\n`);
      }
      break;
    }
  }
  builder.push("/* eslint-disable */\n");
  if (tsNoCheck) {
    builder.push("// @ts-nocheck\n");
  }
  builder.push("\n");
  writeLeadingComments(getPackageComments(file));
  return trimSuffix(builder.join(""), "\n");
}
