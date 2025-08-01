// @generated by protoc-gen-es v2.6.2 with parameter "target=ts"
// @generated from file meshtastic/paxcount.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/paxcount.proto.
 */
export const file_meshtastic_paxcount: GenFile = /*@__PURE__*/
  fileDesc("ChltZXNodGFzdGljL3BheGNvdW50LnByb3RvEgptZXNodGFzdGljIjUKCFBheGNvdW50EgwKBHdpZmkYASABKA0SCwoDYmxlGAIgASgNEg4KBnVwdGltZRgDIAEoDUJjChNjb20uZ2Vla3N2aWxsZS5tZXNoQg5QYXhjb3VudFByb3Rvc1oiZ2l0aHViLmNvbS9tZXNodGFzdGljL2dvL2dlbmVyYXRlZKoCFE1lc2h0YXN0aWMuUHJvdG9idWZzugIAYgZwcm90bzM");

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.Paxcount
 */
export type Paxcount = Message<"meshtastic.Paxcount"> & {
  /**
   *
   * seen Wifi devices
   *
   * @generated from field: uint32 wifi = 1;
   */
  wifi: number;

  /**
   *
   * Seen BLE devices
   *
   * @generated from field: uint32 ble = 2;
   */
  ble: number;

  /**
   *
   * Uptime in seconds
   *
   * @generated from field: uint32 uptime = 3;
   */
  uptime: number;
};

/**
 * Describes the message meshtastic.Paxcount.
 * Use `create(PaxcountSchema)` to create a new message.
 */
export const PaxcountSchema: GenMessage<Paxcount> = /*@__PURE__*/
  messageDesc(file_meshtastic_paxcount, 0);

