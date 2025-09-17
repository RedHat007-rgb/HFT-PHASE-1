import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDataSource } from '@repo/dbschema';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketsModule } from './markets/markets.module';
import { OrderbookModule } from './orderbook/orderbook.module';
import { RedisModule } from './redis/redis.module';
import { TradesModule } from './trades/trades.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      migrationsRun: true,
      synchronize: false,
      autoLoadEntities: true,
    }),
    MarketsModule,
    OrderbookModule,
    RedisModule,
    TradesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
