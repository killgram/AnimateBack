import * as process from "process";

export const Constants = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET ?? "",
  APP_NAME: process.env.APP_NAME,
  API_KEY: process.env.API_KEY,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  PROJECT_ID: process.env.PROJECT_ID,
  STORAGE_BUCKET: process.env.STORAGE_BUCKET,
  MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
  APP_ID: process.env.APP_ID,
  REDIS: process.env.REDIS,
  HASH_ROUND: process.env.HASH_ROUND,
  SH_CLIENT_NAME: String(process.env.SH_CLIENT_NAME),
  SH_MAX_CALLS_PER_SECOND: Number(process.env.SH_MAX_CALLS_PER_SECOND),
  SH_MAX_CALLS_PER_MINUTE: Number(process.env.SH_MAX_CALLS_PER_MINUTE),
  SH_IMAGE_SOURCE: process.env.SH_IMAGE_SOURCE,
  MONGODB_URL: process.env.MONGODB_URL ?? "",
};
