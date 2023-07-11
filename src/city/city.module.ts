import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
import { CacheModule } from '../cache/cache.module'

@Module({
  imports: [CacheModule,
  TypeOrmModule.forFeature([CityEntity])
],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService]
})
export class CityModule {}

// forneça ttl em milissegundos pois estamos usando o cahe v5
