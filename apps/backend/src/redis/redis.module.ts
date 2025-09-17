import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { MarketDataGateway } from './redis.gateway';

@Module({
  providers: [RedisService, MarketDataGateway],
})
export class RedisModule {}
