import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/stocks')
  async getStocks() {
    try {
      return await this.appService.getStockData();
    } catch (error) {
      throw new HttpException('Failed to fetch stock data', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
