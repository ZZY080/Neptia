import { aliyunConfiguration } from '@config';
import { Inject, Injectable } from '@nestjs/common';
import type { IAliyunConfig } from '@config';

@Injectable()
export class AppService {
  public constructor(
    @Inject(aliyunConfiguration.KEY)
    private readonly aliyunConfig: IAliyunConfig,
  ) {
    console.log(aliyunConfig);
  }
  getHello(): string {
    console.log(process.env.NODE_ENV);

    console.log('23');
    console.log(process.env.W);
    return `Hello World!${process.env.NODE_ENV}`;
  }
}
