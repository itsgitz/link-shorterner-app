import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LocalConfigModule} from '../config.module';

@Module({
  imports: [LocalConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
