import { Module } from '@nestjs/common';
import {PrismaClient} from '@prisma/client';

@Module({
  controllers: [],
  providers: [PrismaClient],
  exports: [PrismaClient],
})
export class DatabaseModule {}
