import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number().required().default(8001),
      })
    })
  ]
})
export class LocalConfigModule {}
