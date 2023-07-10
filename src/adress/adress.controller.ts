import { Controller, Post, UsePipes, ValidationPipe, Param, Body } from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddres.dto';
import { AdressEntity } from './entities/adress.entity';
import { AdressService } from './adress.service';

@Controller('adress')
export class AdressController {

    constructor(private readonly addressService: AdressService) {}

    @Post('/:userId')
    async createAddress(@Body() createAddressDto: CreateAddressDto, @Param('userId') userId: number): Promise<AdressEntity> {
        return this.addressService.createAddress(createAddressDto, userId)
    }
}