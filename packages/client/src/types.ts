import {
  AirQualityMetrics,
  DeviceMetrics,
  EnvironmentMetrics, HealthMetrics,
  HostMetrics, LocalStats,
  PowerMetrics
} from './gen/meshtastic/telemetry_pb';


export enum MessageType {
  Text = 'text',
  Position = 'position',
  NodeInfo = 'nodeinfo',
  Telemetry = 'telemetry',
}

export type BaseMessage = {
  type: MessageType;
  from: number
}

export type TextMessage = BaseMessage & {
  type: MessageType.Text;
  text: string;
}

export type PositionMessage = BaseMessage & {
  type: MessageType.Position;
  latitude: number;
  longitude: number;
  altitude: number;
}

export type NodeInfoMessage = BaseMessage & {
  type: MessageType.NodeInfo;
  id: string;
  name: string;
  shortName: string;
}

export type TelemetryMessage = DeviceMetricsMessage | EnvironmentMetricsMessage | HostMetricsMessage | AirQualityMetricsMessage | PowerMetricsMessage | LocalStatsMessage | HealthMetricsMessage;

export type BaseTelemetryMessage = BaseMessage & {
  type: MessageType.Telemetry;
}

export type DeviceMetricsMessage = BaseTelemetryMessage & {
  telemetryData: DeviceMetrics;
  telemetryType: 'deviceMetrics';
}

export type EnvironmentMetricsMessage = BaseTelemetryMessage & {
  telemetryData: EnvironmentMetrics;
  telemetryType: 'environmentMetrics';
}

export type HostMetricsMessage = BaseTelemetryMessage & {
  telemetryData: HostMetrics;
  telemetryType: 'hostMetrics';
}

export type AirQualityMetricsMessage = BaseTelemetryMessage & {
  telemetryData: AirQualityMetrics;
  telemetryType: 'airQualityMetrics';
}

export type PowerMetricsMessage = BaseTelemetryMessage & {
  telemetryData: PowerMetrics;
  telemetryType: 'powerMetrics';
}

export type LocalStatsMessage = BaseTelemetryMessage & {
  telemetryData: LocalStats;
  telemetryType: 'localStats';
}

export type HealthMetricsMessage = BaseTelemetryMessage & {
  telemetryData: HealthMetrics;
  telemetryType: 'healthMetrics';
}

export type Message = TextMessage | PositionMessage | NodeInfoMessage | TelemetryMessage;
