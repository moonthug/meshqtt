import 'dotenv/config'
import { createEnv } from "@t3-oss/env-core";
import * as process from 'node:process';
import { z } from "zod";

const randomClientId = `meshqtt_client_${Math.random().toString(36).substring(2)}`;

export const env = createEnv({
  server: {
    BRIDGE_TOPIC: z.string().default("meshtastic-bridge/"),
    LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
    LOCAL_MQTT_URL: z.string().default("mqtt://127.0.0.1"),
    LOCAL_MQTT_PORT: z.coerce.number().default(1883),
    LOCAL_MQTT_CLIENT_ID: z.string().default(randomClientId),
    LOCAL_MQTT_USERNAME: z.string().optional(),
    LOCAL_MQTT_PASSWORD: z.string().optional(),
    MESHTASTIC_MQTT_URL: z.string().default("mqtt://mqtt.meshtastic.org"),
    MESHTASTIC_MQTT_PORT: z.coerce.number().default(1883),
    MESHTASTIC_MQTT_CLIENT_ID: z.string().default(randomClientId),
    MESHTASTIC_MQTT_USERNAME: z.string().default("meshdev"),
    MESHTASTIC_MQTT_PASSWORD: z.string().default("large4cats"),
    MESHTASTIC_CHANNEL_TOPIC: z.string(),
    MESHTASTIC_CHANNEL_KEY: z.string()
  },
  runtimeEnv: process.env
});
