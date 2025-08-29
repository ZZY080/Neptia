import { registerAs } from '@nestjs/config';

const aliyunConfiguration = registerAs(
  'aliyun',
  async (): Promise<IAliyunConfig> => ({
    accessKeyId: process.env.ALIYUN_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALIYUN_ACCESS_KEY_SECRET,
    mailEndPoint: process.env.ALIYUN_MAIL_ENDPOINT,
    mailAccountNameSuffix: process.env.ALIYUN_MAIL_ACCOUNT_NAME_SUFFIX,
    mailReplyToAddress: process.env.ALIYUN_MAIL_REPLY_TO_ADDRESS,
    mailAddressType: process.env.ALIYUN_MAIL_ADDRESS_TYPE,
    ossRegion: process.env.ALIYUN_OSS_REGION,
    ossPrivateBucket: process.env.ALIYUN_OSS_PRIVATE_BUCKET,
    ossPublicBucket: process.env.ALIYUN_OSS_PUBLIC_BUCKET,
    ossProcessingBucket: process.env.ALIYUN_OSS_PROCESSING_BUCKET,
    ossEndpoint: process.env.ALIYUN_OSS_ENDPOINT,
    ossSignatureUrlExpireTime: process.env.ALIYUN_OSS_SIGNATURE_URL_EXPIRE_TIME,
    ossRoleArn: process.env.ALIYUN_OSS_ROLE_ARN,
  }),
);

const wechatConfiguration = registerAs(
  'wechat',
  async (): Promise<IWechatConfig> => ({
    appId: process.env.WECHAT_MINI_APPID,
    appSecret: process.env.WECHAT_MINI_APPSECRECT,
    mchId: process.env.WECHAT_PAY_MCHID,
    mchSerialNo: process.env.WECHAT_PAY_MCH_SERIAL_NO,
    apiV3Key: process.env.WECHAT_PAY_API_V3_KEY,
    mchPrivateKeyPath: process.env.WECHAT_PAY_MCH_PRIVATE_KEY_PATH,
    mchCertPath: process.env.WECHAT_PAY_MCH_CERT_PATH, // 新增：公钥证书路径
    notifyUrl: process.env.WECHAT_PAY_NOTIFY_URL,
  }),
);

interface IStripeConfig {
  publishableKey: string;
  secretKey: string;
  webhookSecret: string;
}
interface IWechatConfig {
  appId: string;
  appSecret: string;
  mchId: string;
  mchSerialNo: string;
  apiV3Key: string;
  mchPrivateKeyPath: string;
  mchCertPath: string; // 新增：公钥证书路径
  notifyUrl: string;
}

interface IAliyunConfig {
  accessKeyId: string;
  accessKeySecret: string;
  mailEndPoint: string;
  mailAccountNameSuffix: string;
  mailReplyToAddress: string;
  mailAddressType: string;

  ossRegion: string;
  ossPrivateBucket: string;
  ossPublicBucket: string;
  ossProcessingBucket: string;
  ossEndpoint: string;
  ossSignatureUrlExpireTime: string;
  ossRoleArn: string;
}

export { aliyunConfiguration, wechatConfiguration };

export type { IAliyunConfig, IStripeConfig, IWechatConfig };
