import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { AppService } from 'src/app.service';


@WebSocketGateway({ cors: '*' })
export class StocksGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private appService: AppService) {}

  afterInit(server: Server) {
    console.log("In socketcs");

    setInterval(async () => {
      console.log("In set interval");
      const data = await this.appService.getStockData();
      server.emit('stocks', data);
    }, 10000);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
