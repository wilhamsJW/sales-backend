import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityService } from 'src/city/city.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddres.dto';
import { AdressEntity } from './entities/adress.entity';

@Injectable()
export class AdressService {

    constructor(
        @InjectRepository(AdressEntity)
        private readonly addressRepository: Repository<AdressEntity>,
        private readonly userService: UserService,
        private readonly cityService: CityService
    ) {}

    async createAddress(createAddressDto: CreateAddressDto, userId: number): Promise<AdressEntity> {
        await this.userService.findUserByID(userId)
        await this.cityService.findCityById(createAddressDto.cityId)
        return this.addressRepository.save({
            ...createAddressDto,
            userId,
        });
    }

}
