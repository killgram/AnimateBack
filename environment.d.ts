declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      APP_NAME: string;
      ACCESS_TOKEN_SECRET: string;
      REDIS: string;
      HASH_ROUND: string;
    }
  }
}

export {};
