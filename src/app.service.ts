import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from server!';
  }

  async getStockData(): Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://latest-stock-price.p.rapidapi.com/any',
      headers: {
        'X-RapidAPI-Key': '7a5666958bmsh0774bfca63aa394p1141fcjsn6817186cf7a4',
        'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);

      console.log(response.data, "==================== response.data ====================");

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching stock data');
    }
  }
}
