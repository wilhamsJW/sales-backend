import { ReturnStateDto } from "src/state/dtos/returnState.dto";
import { CityEntity } from "../entities/city.entity";

export class ReturnCityDto {
    name: string;
    nameCityStateRelational?: ReturnStateDto

    constructor(city: CityEntity) {
        this.name = city.name
        this.nameCityStateRelational = city.nameCityStateRelational ? new ReturnStateDto(city.nameCityStateRelational) : undefined
    }
}