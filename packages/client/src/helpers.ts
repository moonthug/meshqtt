import { Message, NodeInfoMessage, PositionMessage, TelemetryMessage, TextMessage } from './types';


export function isTextMessage(message: Message): message is TextMessage {
  return message.type === 'text';
}

export function isPositionMessage(message: Message): message is PositionMessage {
  return message.type === 'position';
}

export function isNodeInfoMessage(message: Message): message is NodeInfoMessage {
  return message.type === 'nodeinfo';
}

export function isTelemetryMessage(message: Message): message is TelemetryMessage {
  return message.type === 'telemetry';
}
