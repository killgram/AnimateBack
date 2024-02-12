import { createClient } from "redis";
import * as process from "process";

const client = createClient({
  url: process.env.REDIS,
});

const initRedis = async () => {
  await client.connect();
};

export { client, initRedis };
