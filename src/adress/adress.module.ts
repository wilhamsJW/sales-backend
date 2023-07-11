import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from 'src/city/city.module';
import { UserModule } from 'src/user/user.module';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';
import { AdressEntity } from './entities/adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdressEntity]), UserModule, CityModule],
  controllers: [AdressController],
  providers: [AdressService]
})
export class AdressModule {}
