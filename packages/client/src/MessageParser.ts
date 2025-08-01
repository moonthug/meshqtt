import { fromBinary } from '@bufbuild/protobuf';
import * as crypto from 'node:crypto';
import { Data, DataSchema, MeshPacket, PositionSchema, UserSchema } from './gen/meshtastic/mesh_pb';

import { ServiceEnvelopeSchema } from './gen/meshtastic/mqtt_pb';
import { PortNum } from './gen/meshtastic/portnums_pb';
import { TelemetrySchema } from './gen/meshtastic/telemetry_pb';
import {
  BaseTelemetryMessage,
  Message,
  MessageType,
  NodeInfoMessage,
  PositionMessage,
  TelemetryMessage,
  TextMessage
} from './types';


export class MessageParser {
  private readonly channelKey: string;

  constructor(
    channelKey: string
  ) {
    this.channelKey = channelKey;
  }

  private decryptMeshPacket(packet: MeshPacket) {
    const encryptedBuffer = Buffer.from(
      packet.payloadVariant.value as Uint8Array,
    );

    const idBuffer = Buffer.alloc(8);
    idBuffer.writeBigUInt64LE(BigInt(packet.id));
    const fromBuffer = Buffer.alloc(8);
    fromBuffer.writeBigUInt64LE(BigInt(packet.from));

    const nonce = Buffer.concat([idBuffer, fromBuffer]);

    const decipheriv = crypto.createDecipheriv(
      "aes-256-ctr",
      Buffer.from(this.channelKey, "base64"),
      nonce
    );

    const decrypted = Buffer.concat([
      decipheriv.update(encryptedBuffer),
      decipheriv.final()
    ]);

    return fromBinary(DataSchema, decrypted);
  }

  private parseTextMessage(meshPacket: MeshPacket, data: Data): TextMessage {
    return {
      type: MessageType.Text,
      text: data.payload.toString(),
      from: meshPacket.from
    };
  }

  private parsePositionMessage(meshPacket: MeshPacket, data: Data): PositionMessage {
    const position = fromBinary(PositionSchema, data.payload);

    if (!position.latitudeI || !position.longitudeI || !position.altitude) {
      throw new Error('Invalid position data');
    }

    debugger;

    return {
      type: MessageType.Position,
      latitude: position.latitudeI / Math.pow(10, position.precisionBits / 4 - 1),
      longitude: position.longitudeI / Math.pow(10, position.precisionBits / 4 - 1),
      altitude: position.altitude,
      from: meshPacket.from
    }
  }

  private parseNodeInfoMessage(meshPacket: MeshPacket, data: Data): NodeInfoMessage {
    const nodeInfo = fromBinary(UserSchema, data.payload);

    return {
      type: MessageType.NodeInfo,
      id: nodeInfo.id,
      name: nodeInfo.longName,
      shortName: nodeInfo.shortName,
      from: meshPacket.from
    }
  }

  private parseTelemetryMessage(meshPacket: MeshPacket, data: Data): TelemetryMessage {
    const telemetry = fromBinary(TelemetrySchema, data.payload);

    if (!telemetry.variant || !telemetry.variant.case) {
      throw new Error('Invalid telemetry data');
    }

    const baseTelemetryMessage: BaseTelemetryMessage = {
      type: MessageType.Telemetry,
      from: meshPacket.from
    }

    switch (telemetry.variant.case) {
      case 'airQualityMetrics':
        return {
          ...baseTelemetryMessage,
          telemetryType: 'airQualityMetrics',
          telemetryData: telemetry.variant.value
        };
      case 'deviceMetrics':
        return {
          ...baseTelemetryMessage,
          telemetryType: 'deviceMetrics',
          telemetryData: telemetry.variant.value
        };
      case 'environmentMetrics':
        return {
          ...baseTelemetryMessage,
          telemetryType: 'environmentMetrics',
          telemetryData: telemetry.variant.value
        };
      case 'healthMetrics':
        return {
          ...baseTelemetryMessage,
          telemetryType: 'healthMetrics',
          telemetryData: telemetry.variant.value
        };
      case 'hostMetrics':
        return {
          ...baseTelemetryMessage,
          telemetryType: 'hostMetrics',
          telemetryData: telemetry.variant.value
        };
      case 'localStats':
        return {
          ...baseTelemetryMessage,
          telemetryType: 'localStats',
          telemetryData: telemetry.variant.value
        };
      case 'powerMetrics':
        return {
          ...baseTelemetryMessage,
          telemetryType: 'powerMetrics',
          telemetryData: telemetry.variant.value
        };
      default:
        throw new Error('Unknown telemetry type');
    }
  }

  public parseMessage(
    message: Buffer
  ): Message {
    const serviceEnvelope = fromBinary(ServiceEnvelopeSchema, message); // User

    if (!serviceEnvelope.packet || !serviceEnvelope.packet?.payloadVariant.case) {
      throw new Error('Invalid service envelope');
    }

    const data = serviceEnvelope.packet?.payloadVariant.case === 'encrypted'
      ? this.decryptMeshPacket(serviceEnvelope.packet)
      : serviceEnvelope.packet.payloadVariant.value;

    if (data.portnum === PortNum.TEXT_MESSAGE_APP) {
      return this.parseTextMessage(serviceEnvelope.packet, data);
    }

    if (data.portnum === PortNum.POSITION_APP) {
      return this.parsePositionMessage(serviceEnvelope.packet, data)
    }

    if (data.portnum === PortNum.NODEINFO_APP) {
      return this.parseNodeInfoMessage(serviceEnvelope.packet, data);
    }

    if (data.portnum === PortNum.TELEMETRY_APP) {
      return this.parseTelemetryMessage(serviceEnvelope.packet, data);
    }

    throw new Error(`Invalid message type: ${data.portnum}`);
  }
}
