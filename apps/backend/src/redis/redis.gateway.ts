import {
  OnGatewayConnection,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { RedisService } from './redis.service';

@WebSocketGateway()
export class MarketDataGateway implements OnGatewayInit, OnGatewayConnection {
  constructor(private redisService: RedisService) {}
  afterInit() {
    console.log('websoket initialized....');
  }

  async handleConnection(client: WebSocket) {
    try {
      await this.redisService.redisSubscribe(
        'market.ticker.BTCUSDT.binance',
        (msg) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(msg);
          }
        },
      );
    } catch (error) {
      console.log(error);
    }
  }
}
