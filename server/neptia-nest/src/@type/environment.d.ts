declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'test' | 'production';
      PORT: string;
      HOST: string;
      WEB_EXTERNAL_URL: string;
      WEB_ADMIN_URL: string;

      AZURE_TENANT_ID?: string;
      AZURE_CLIENT_ID?: string;
      AZURE_CLIENT_SECRET?: string;
      AZURE_KEYVAULT_ENDPOINT: string;
      AZURE_STORAGE_ENDPOINT: string;
      AZURE_CDN_ENDPOINT: string;
      AZURE_COMMUNICATION_ENDPOINT: string;
      AZURE_COMMUNICATION_EMAIL_DOMAIN: string;

      ALIYUN_ACCESS_KEY_ID: string;
      ALIYUN_ACCESS_KEY_SECRET: string;
      ALIYUN_MAIL_ENDPOINT: string;
      ALIYUN_MAIL_ACCOUNT_NAME_SUFFIX: string;
      ALIYUN_MAIL_REPLY_TO_ADDRESS: string;
      ALIYUN_MAIL_ADDRESS_TYPE: string;
      ALIYUN_OSS_REGION: string;
      ALIYUN_OSS_PRIVATE_BUCKET: string;
      ALIYUN_OSS_PUBLIC_BUCKET: string;
      ALIYUN_OSS_PROCESSING_BUCKET: string;
      ALIYUN_OSS_ENDPOINT: string;
      ALIYUN_OSS_SIGNATURE_URL_EXPIRE_TIME: string;
      ALIYUN_OSS_ROLE_ARN: string;

      WECHAT_MINI_APPID: string;
      WECHAT_MINI_APPSECRECT: string;
      WECHAT_PAY_MCHID: string;
      WECHAT_PAY_MCH_SERIAL_NO: string;
      WECHAT_PAY_API_V3_KEY: string;
      WECHAT_PAY_MCH_PRIVATE_KEY_PATH: string;
      WECHAT_PAY_MCH_CERT_PATH: string;
      WECHAT_PAY_NOTIFY_URL: string;

      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_DATABASE: string;
      JWT_ACCESS_EXPIRE: string;
      JWT_REFRESH_EXPIRE: string;
      JWT_VERIFY_EXPIRE: string;
      OPENAI_BASE_URL: string;
      OPENAI_API_KEY?: string;
      OPENAI_ORGANIZATION?: string;
      OPENAI_PROJECT?: string;
      ANTHROPIC_BASE_URL: string;
      ANTHROPIC_API_KEY?: string;
      DEEPSEEK_BASE_URL: string;
      DEEPSEEK_API_KEY?: string;
      STRIPE_PUBLISHABLE_KEY: string;
      AXIOM_DATASET: string;
      AXIOM_TOKEN: string;
      HASHIDS_SALT?: string;
      CRYPTO_SALT?: string;
      CRYPTO_PASSWORD?: string;
      CRYPTO_HMAC?: string;
      JWT_REFRESH_SECRET?: string;
      JWT_VERIFY_SECRET?: string;
      JWT_ACCESS_SECRET?: string;
      DB_PASSWORD_CRUD?: string;
      API_VIDEO_API_KEY?: string;
      STRIPE_SECRET_KEY?: string;
      EXECUTE_CRON?: string;
    }
  }
}

export {};
