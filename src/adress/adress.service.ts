import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddres.dto';
import { AdressEntity } from './entities/adress.entity';

@Injectable()
export class AdressService {

    constructor(
        @InjectRepository(AdressEntity)
        private readonly addressRepository: Repository<AdressEntity>,
    ) {}

    async createAddress(createAddressDto: CreateAddressDto, userId: number): Promise<AdressEntity> {
        return this.addressRepository.save({
            ...createAddressDto,
            userId,
        });
    }

}
