import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import redisClient from '@repo/redis-client';
import { RedisClientType } from 'redis';
@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType;
  onModuleInit() {
    this.client = redisClient;

    console.log('redis connection is open...');
  }

  async onModuleDestroy() {
    await this.client.close();
    console.log('redis connection has been closed');
  }

  async redisSubscribe(channel: string, callback: (msg) => void) {
    await this.client.subscribe(channel, callback);
  }
}
