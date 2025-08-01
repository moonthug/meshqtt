// @generated by protoc-gen-es v2.6.2 with parameter "target=ts"
// @generated from file meshtastic/storeforward.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/storeforward.proto.
 */
export const file_meshtastic_storeforward: GenFile = /*@__PURE__*/
  fileDesc("Ch1tZXNodGFzdGljL3N0b3JlZm9yd2FyZC5wcm90bxIKbWVzaHRhc3RpYyKcBwoPU3RvcmVBbmRGb3J3YXJkEjcKAnJyGAEgASgOMisubWVzaHRhc3RpYy5TdG9yZUFuZEZvcndhcmQuUmVxdWVzdFJlc3BvbnNlEjcKBXN0YXRzGAIgASgLMiYubWVzaHRhc3RpYy5TdG9yZUFuZEZvcndhcmQuU3RhdGlzdGljc0gAEjYKB2hpc3RvcnkYAyABKAsyIy5tZXNodGFzdGljLlN0b3JlQW5kRm9yd2FyZC5IaXN0b3J5SAASOgoJaGVhcnRiZWF0GAQgASgLMiUubWVzaHRhc3RpYy5TdG9yZUFuZEZvcndhcmQuSGVhcnRiZWF0SAASDgoEdGV4dBgFIAEoDEgAGs0BCgpTdGF0aXN0aWNzEhYKDm1lc3NhZ2VzX3RvdGFsGAEgASgNEhYKDm1lc3NhZ2VzX3NhdmVkGAIgASgNEhQKDG1lc3NhZ2VzX21heBgDIAEoDRIPCgd1cF90aW1lGAQgASgNEhAKCHJlcXVlc3RzGAUgASgNEhgKEHJlcXVlc3RzX2hpc3RvcnkYBiABKA0SEQoJaGVhcnRiZWF0GAcgASgIEhIKCnJldHVybl9tYXgYCCABKA0SFQoNcmV0dXJuX3dpbmRvdxgJIAEoDRpJCgdIaXN0b3J5EhgKEGhpc3RvcnlfbWVzc2FnZXMYASABKA0SDgoGd2luZG93GAIgASgNEhQKDGxhc3RfcmVxdWVzdBgDIAEoDRouCglIZWFydGJlYXQSDgoGcGVyaW9kGAEgASgNEhEKCXNlY29uZGFyeRgCIAEoDSK8AgoPUmVxdWVzdFJlc3BvbnNlEgkKBVVOU0VUEAASEAoMUk9VVEVSX0VSUk9SEAESFAoQUk9VVEVSX0hFQVJUQkVBVBACEg8KC1JPVVRFUl9QSU5HEAMSDwoLUk9VVEVSX1BPTkcQBBIPCgtST1VURVJfQlVTWRAFEhIKDlJPVVRFUl9ISVNUT1JZEAYSEAoMUk9VVEVSX1NUQVRTEAcSFgoSUk9VVEVSX1RFWFRfRElSRUNUEAgSGQoVUk9VVEVSX1RFWFRfQlJPQURDQVNUEAkSEAoMQ0xJRU5UX0VSUk9SEEASEgoOQ0xJRU5UX0hJU1RPUlkQQRIQCgxDTElFTlRfU1RBVFMQQhIPCgtDTElFTlRfUElORxBDEg8KC0NMSUVOVF9QT05HEEQSEAoMQ0xJRU5UX0FCT1JUEGpCCQoHdmFyaWFudEJqChNjb20uZ2Vla3N2aWxsZS5tZXNoQhVTdG9yZUFuZEZvcndhcmRQcm90b3NaImdpdGh1Yi5jb20vbWVzaHRhc3RpYy9nby9nZW5lcmF0ZWSqAhRNZXNodGFzdGljLlByb3RvYnVmc7oCAGIGcHJvdG8z");

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.StoreAndForward
 */
export type StoreAndForward = Message<"meshtastic.StoreAndForward"> & {
  /**
   *
   * TODO: REPLACE
   *
   * @generated from field: meshtastic.StoreAndForward.RequestResponse rr = 1;
   */
  rr: StoreAndForward_RequestResponse;

  /**
   *
   * TODO: REPLACE
   *
   * @generated from oneof meshtastic.StoreAndForward.variant
   */
  variant: {
    /**
     *
     * TODO: REPLACE
     *
     * @generated from field: meshtastic.StoreAndForward.Statistics stats = 2;
     */
    value: StoreAndForward_Statistics;
    case: "stats";
  } | {
    /**
     *
     * TODO: REPLACE
     *
     * @generated from field: meshtastic.StoreAndForward.History history = 3;
     */
    value: StoreAndForward_History;
    case: "history";
  } | {
    /**
     *
     * TODO: REPLACE
     *
     * @generated from field: meshtastic.StoreAndForward.Heartbeat heartbeat = 4;
     */
    value: StoreAndForward_Heartbeat;
    case: "heartbeat";
  } | {
    /**
     *
     * Text from history message.
     *
     * @generated from field: bytes text = 5;
     */
    value: Uint8Array;
    case: "text";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message meshtastic.StoreAndForward.
 * Use `create(StoreAndForwardSchema)` to create a new message.
 */
export const StoreAndForwardSchema: GenMessage<StoreAndForward> = /*@__PURE__*/
  messageDesc(file_meshtastic_storeforward, 0);

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.StoreAndForward.Statistics
 */
export type StoreAndForward_Statistics = Message<"meshtastic.StoreAndForward.Statistics"> & {
  /**
   *
   * Number of messages we have ever seen
   *
   * @generated from field: uint32 messages_total = 1;
   */
  messagesTotal: number;

  /**
   *
   * Number of messages we have currently saved our history.
   *
   * @generated from field: uint32 messages_saved = 2;
   */
  messagesSaved: number;

  /**
   *
   * Maximum number of messages we will save
   *
   * @generated from field: uint32 messages_max = 3;
   */
  messagesMax: number;

  /**
   *
   * Router uptime in seconds
   *
   * @generated from field: uint32 up_time = 4;
   */
  upTime: number;

  /**
   *
   * Number of times any client sent a request to the S&F.
   *
   * @generated from field: uint32 requests = 5;
   */
  requests: number;

  /**
   *
   * Number of times the history was requested.
   *
   * @generated from field: uint32 requests_history = 6;
   */
  requestsHistory: number;

  /**
   *
   * Is the heartbeat enabled on the server?
   *
   * @generated from field: bool heartbeat = 7;
   */
  heartbeat: boolean;

  /**
   *
   * Maximum number of messages the server will return.
   *
   * @generated from field: uint32 return_max = 8;
   */
  returnMax: number;

  /**
   *
   * Maximum history window in minutes the server will return messages from.
   *
   * @generated from field: uint32 return_window = 9;
   */
  returnWindow: number;
};

/**
 * Describes the message meshtastic.StoreAndForward.Statistics.
 * Use `create(StoreAndForward_StatisticsSchema)` to create a new message.
 */
export const StoreAndForward_StatisticsSchema: GenMessage<StoreAndForward_Statistics> = /*@__PURE__*/
  messageDesc(file_meshtastic_storeforward, 0, 0);

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.StoreAndForward.History
 */
export type StoreAndForward_History = Message<"meshtastic.StoreAndForward.History"> & {
  /**
   *
   * Number of that will be sent to the client
   *
   * @generated from field: uint32 history_messages = 1;
   */
  historyMessages: number;

  /**
   *
   * The window of messages that was used to filter the history client requested
   *
   * @generated from field: uint32 window = 2;
   */
  window: number;

  /**
   *
   * Index in the packet history of the last message sent in a previous request to the server.
   * Will be sent to the client before sending the history and can be set in a subsequent request to avoid getting packets the server already sent to the client.
   *
   * @generated from field: uint32 last_request = 3;
   */
  lastRequest: number;
};

/**
 * Describes the message meshtastic.StoreAndForward.History.
 * Use `create(StoreAndForward_HistorySchema)` to create a new message.
 */
export const StoreAndForward_HistorySchema: GenMessage<StoreAndForward_History> = /*@__PURE__*/
  messageDesc(file_meshtastic_storeforward, 0, 1);

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.StoreAndForward.Heartbeat
 */
export type StoreAndForward_Heartbeat = Message<"meshtastic.StoreAndForward.Heartbeat"> & {
  /**
   *
   * Period in seconds that the heartbeat is sent out that will be sent to the client
   *
   * @generated from field: uint32 period = 1;
   */
  period: number;

  /**
   *
   * If set, this is not the primary Store & Forward router on the mesh
   *
   * @generated from field: uint32 secondary = 2;
   */
  secondary: number;
};

/**
 * Describes the message meshtastic.StoreAndForward.Heartbeat.
 * Use `create(StoreAndForward_HeartbeatSchema)` to create a new message.
 */
export const StoreAndForward_HeartbeatSchema: GenMessage<StoreAndForward_Heartbeat> = /*@__PURE__*/
  messageDesc(file_meshtastic_storeforward, 0, 2);

/**
 *
 * 001 - 063 = From Router
 * 064 - 127 = From Client
 *
 * @generated from enum meshtastic.StoreAndForward.RequestResponse
 */
export enum StoreAndForward_RequestResponse {
  /**
   *
   * Unset/unused
   *
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   *
   * Router is an in error state.
   *
   * @generated from enum value: ROUTER_ERROR = 1;
   */
  ROUTER_ERROR = 1,

  /**
   *
   * Router heartbeat
   *
   * @generated from enum value: ROUTER_HEARTBEAT = 2;
   */
  ROUTER_HEARTBEAT = 2,

  /**
   *
   * Router has requested the client respond. This can work as a
   * "are you there" message.
   *
   * @generated from enum value: ROUTER_PING = 3;
   */
  ROUTER_PING = 3,

  /**
   *
   * The response to a "Ping"
   *
   * @generated from enum value: ROUTER_PONG = 4;
   */
  ROUTER_PONG = 4,

  /**
   *
   * Router is currently busy. Please try again later.
   *
   * @generated from enum value: ROUTER_BUSY = 5;
   */
  ROUTER_BUSY = 5,

  /**
   *
   * Router is responding to a request for history.
   *
   * @generated from enum value: ROUTER_HISTORY = 6;
   */
  ROUTER_HISTORY = 6,

  /**
   *
   * Router is responding to a request for stats.
   *
   * @generated from enum value: ROUTER_STATS = 7;
   */
  ROUTER_STATS = 7,

  /**
   *
   * Router sends a text message from its history that was a direct message.
   *
   * @generated from enum value: ROUTER_TEXT_DIRECT = 8;
   */
  ROUTER_TEXT_DIRECT = 8,

  /**
   *
   * Router sends a text message from its history that was a broadcast.
   *
   * @generated from enum value: ROUTER_TEXT_BROADCAST = 9;
   */
  ROUTER_TEXT_BROADCAST = 9,

  /**
   *
   * Client is an in error state.
   *
   * @generated from enum value: CLIENT_ERROR = 64;
   */
  CLIENT_ERROR = 64,

  /**
   *
   * Client has requested a replay from the router.
   *
   * @generated from enum value: CLIENT_HISTORY = 65;
   */
  CLIENT_HISTORY = 65,

  /**
   *
   * Client has requested stats from the router.
   *
   * @generated from enum value: CLIENT_STATS = 66;
   */
  CLIENT_STATS = 66,

  /**
   *
   * Client has requested the router respond. This can work as a
   * "are you there" message.
   *
   * @generated from enum value: CLIENT_PING = 67;
   */
  CLIENT_PING = 67,

  /**
   *
   * The response to a "Ping"
   *
   * @generated from enum value: CLIENT_PONG = 68;
   */
  CLIENT_PONG = 68,

  /**
   *
   * Client has requested that the router abort processing the client's request
   *
   * @generated from enum value: CLIENT_ABORT = 106;
   */
  CLIENT_ABORT = 106,
}

/**
 * Describes the enum meshtastic.StoreAndForward.RequestResponse.
 */
export const StoreAndForward_RequestResponseSchema: GenEnum<StoreAndForward_RequestResponse> = /*@__PURE__*/
  enumDesc(file_meshtastic_storeforward, 0, 0);

