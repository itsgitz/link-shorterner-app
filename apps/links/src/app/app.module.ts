import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@link-shorterner-app/config'
import { DatabaseModule } from '@link-shorterner-app/database'
import {LocalConfigModule} from '../config.module';

@Module({
  imports: [
    ConfigModule,
    LocalConfigModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
