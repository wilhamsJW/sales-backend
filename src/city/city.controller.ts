import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {}
    @Get('/:stateId') // criado um nova rora
    async getAllCitiesByStateId(): Promise<CityEntity[]> {
        return this.cityService.getAllCitiesByStateId(10)
    }
}
