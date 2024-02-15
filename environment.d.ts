declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      APP_NAME: string;
      ACCESS_TOKEN_SECRET: string;
      REDIS: string;
      HASH_ROUND: string;
      API_KEY: string;
      AUTH_DOMAIN: string;
      PROJECT_ID: string;
      STORAGE_BUCKET: string;
      MESSAGING_SENDER_ID: string;
      APP_ID: string;
    }
  }
}

export {};
