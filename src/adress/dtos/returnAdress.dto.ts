import { ReturnCityDto } from "src/city/dtos/returnCity.dto";
import { AdressEntity } from "../entities/adress.entity";

export class ReturnAddressDto {
    complement: string;
    numberAndress: number;
    cep: string;
    city?: ReturnCityDto

    constructor(address: AdressEntity) {
        this.complement = address.complement
        this.numberAndress = address.numberAndress
        this.cep = address.cep
        this.city = address.city ? new ReturnCityDto(address.city) : null
    }
}
/**
 * new ReturnCityDto(address.city) = estou enviando os dados para esta class chamada ReturnCityDto
 * ela funciona como um formatador de dados e ela é um DTO ou seja um Data Trasnferer, está transferindo meus dados
 */