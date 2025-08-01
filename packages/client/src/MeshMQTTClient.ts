import mqtt from 'mqtt';
import { EventEmitter } from 'node:events';

import { isNodeInfoMessage, isPositionMessage, isTelemetryMessage, isTextMessage } from './helpers';
import {
  MessageParser,
} from './MessageParser';
import { Message, NodeInfoMessage, PositionMessage, TelemetryMessage, TextMessage } from './types';


export type MeshMQTTClientConfig = {
  url: string;
  port?: number;
  clientId: string;
  username: string;
  password: string;
  topic: string;
  channelKey: string
}

type EventMap = {
  subscribed: [string],
  message: [Message],
  text: [TextMessage],
  position: [PositionMessage],
  nodeinfo: [NodeInfoMessage],
  telemetry: [TelemetryMessage]
  error: [Error]
}

export class MeshMQTTClient extends EventEmitter<EventMap> {
  private readonly client: mqtt.MqttClient;
  private readonly messageParser: MessageParser;

  constructor(config: MeshMQTTClientConfig) {
    super();

    this.messageParser = new MessageParser(config.channelKey);

    this.client = mqtt.connect(
      config.url,
      {
        port: config.port,
        clientId: config.clientId,
        username: config.username,
        password: config.password,
      }
    );

    this.client.on("connect", () => {
      this.client.subscribe(config.topic, (err) => {
        if (err) {
          this.emit("error", err);
          return;
        }

        this.emit("subscribed", config.topic);
      });
    });

    this.client.on("message", this.handleMessage.bind(this));
  }

  private handleMessage(_topic: string, message: Buffer) {
    try {
      const parsedMessage = this.messageParser.parseMessage(message);

      this.emit("message", parsedMessage);

      if (isTextMessage(parsedMessage)) {
        this.emit("text", parsedMessage);
      } else if (isPositionMessage(parsedMessage)) {
        this.emit("position", parsedMessage);
      } else if (isNodeInfoMessage(parsedMessage)) {
        this.emit("nodeinfo", parsedMessage);
      } else if (isTelemetryMessage(parsedMessage)) {
        this.emit("telemetry", parsedMessage);
      }
    } catch (e) {
      if (e instanceof Error) {
        this.emit("error", e);
      }
    }
  }
}
