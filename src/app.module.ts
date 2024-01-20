import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksGateway } from './stocks.gateway';

@Module({
  controllers: [AppController],
  providers: [AppService, StocksGateway],
  exports: [AppService]
})
export class AppModule {}
