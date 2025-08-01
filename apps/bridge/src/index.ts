import { MeshMQTTClient  } from '@meshqtt/client';
import * as mqtt from 'mqtt';
import { pino } from 'pino';

import { env } from './env';

function main() {
  const logger = pino({
    level: env.LOG_LEVEL,
  });

  logger.info("Starting MeshMQTT Bridge");

  const meshMQTTClient = new MeshMQTTClient({
    url: env.MESHTASTIC_MQTT_URL,
    port: env.MESHTASTIC_MQTT_PORT,
    clientId: env.MESHTASTIC_MQTT_CLIENT_ID,
    username: env.MESHTASTIC_MQTT_USERNAME,
    password: env.MESHTASTIC_MQTT_PASSWORD,
    topic: env.MESHTASTIC_CHANNEL_TOPIC,
    channelKey: env.MESHTASTIC_CHANNEL_KEY
  });

  const localMQTTClient = mqtt.connect(
    env.LOCAL_MQTT_URL,
    {
      port: env.LOCAL_MQTT_PORT,
      clientId: env.LOCAL_MQTT_CLIENT_ID,
      username: env.LOCAL_MQTT_USERNAME,
      password: env.LOCAL_MQTT_PASSWORD,
    }
  );

  meshMQTTClient.on("subscribed", topic => {
    logger.info({ event: "subscribed", topic }, "Subscribed to MeshMQTT topic");
  });

  meshMQTTClient.on("error", error => {
    logger.error({ event: "error", error },'MeshQTT Error');
  });

  meshMQTTClient.on("message", message => {
    logger.debug({ event: "message", message, topic: env.BRIDGE_TOPIC }, 'Message');
    localMQTTClient.publish(env.BRIDGE_TOPIC, JSON.stringify(message));
  });
}

main();
