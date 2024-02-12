declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      APP_NAME: string;
      ADMIN_ACCESS_TOKEN_SECRET: string;
      MOBILE_ACCESS_TOKEN_SECRET: string;
      REDIS: string;
    }
  }
}

export {};
