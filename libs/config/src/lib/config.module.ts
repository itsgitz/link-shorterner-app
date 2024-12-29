import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import Joi = require('joi');

@Module({
  controllers: [],
  providers: [],
  exports: [NestConfigModule],
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_PASSWORD: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
      })
    })
  ]
})
export class ConfigModule {}
