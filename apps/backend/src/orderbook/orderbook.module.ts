import { Module } from '@nestjs/common';
import { OrderbookService } from './orderbook.service';

@Module({
  providers: [OrderbookService]
})
export class OrderbookModule {}
