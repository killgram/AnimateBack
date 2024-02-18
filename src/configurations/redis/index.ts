import { createClient } from "redis";
import { Constants } from "@configurations/constants";

const client = createClient({
  url: Constants.REDIS,
});

const initRedis = async () => {
  await client.connect();
};

export { client, initRedis };
