import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';
import { AdressEntity } from './entities/adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdressEntity])],
  controllers: [AdressController],
  providers: [AdressService]
})
export class AdressModule {}
