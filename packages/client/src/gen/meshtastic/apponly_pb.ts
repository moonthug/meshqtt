// @generated by protoc-gen-es v2.6.2 with parameter "target=ts"
// @generated from file meshtastic/apponly.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type { ChannelSettings } from "./channel_pb";
import { file_meshtastic_channel } from "./channel_pb";
import type { Config_LoRaConfig } from "./config_pb";
import { file_meshtastic_config } from "./config_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/apponly.proto.
 */
export const file_meshtastic_apponly: GenFile = /*@__PURE__*/
  fileDesc("ChhtZXNodGFzdGljL2FwcG9ubHkucHJvdG8SCm1lc2h0YXN0aWMibwoKQ2hhbm5lbFNldBItCghzZXR0aW5ncxgBIAMoCzIbLm1lc2h0YXN0aWMuQ2hhbm5lbFNldHRpbmdzEjIKC2xvcmFfY29uZmlnGAIgASgLMh0ubWVzaHRhc3RpYy5Db25maWcuTG9SYUNvbmZpZ0JiChNjb20uZ2Vla3N2aWxsZS5tZXNoQg1BcHBPbmx5UHJvdG9zWiJnaXRodWIuY29tL21lc2h0YXN0aWMvZ28vZ2VuZXJhdGVkqgIUTWVzaHRhc3RpYy5Qcm90b2J1ZnO6AgBiBnByb3RvMw", [file_meshtastic_channel, file_meshtastic_config]);

/**
 *
 * This is the most compact possible representation for a set of channels.
 * It includes only one PRIMARY channel (which must be first) and
 * any SECONDARY channels.
 * No DISABLED channels are included.
 * This abstraction is used only on the the 'app side' of the world (ie python, javascript and android etc) to show a group of Channels as a (long) URL
 *
 * @generated from message meshtastic.ChannelSet
 */
export type ChannelSet = Message<"meshtastic.ChannelSet"> & {
  /**
   *
   * Channel list with settings
   *
   * @generated from field: repeated meshtastic.ChannelSettings settings = 1;
   */
  settings: ChannelSettings[];

  /**
   *
   * LoRa config
   *
   * @generated from field: meshtastic.Config.LoRaConfig lora_config = 2;
   */
  loraConfig?: Config_LoRaConfig;
};

/**
 * Describes the message meshtastic.ChannelSet.
 * Use `create(ChannelSetSchema)` to create a new message.
 */
export const ChannelSetSchema: GenMessage<ChannelSet> = /*@__PURE__*/
  messageDesc(file_meshtastic_apponly, 0);

