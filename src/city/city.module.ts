import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register({
    ttl: 900000,
  }), 
  TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}

// forneça ttl em milissegundos pois estamos usando o cahe v5
