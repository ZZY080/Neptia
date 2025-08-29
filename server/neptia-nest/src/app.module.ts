import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import path from 'path';
import { aliyunConfiguration, wechatConfiguration } from '@config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // 全局使用，无需在每个模块导入
      isGlobal: true,
      // 加载环境变量文件，根据 NODE_ENV 选择
      envFilePath: path.resolve(
        process.cwd(),
        `.env.${process.env.NODE_ENV || 'development'}`,
      ),
      // 可以加载多个 registerAs 配置
      load: [wechatConfiguration, aliyunConfiguration],
      // 支持 ${VAR_NAME} 引用
      // expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
