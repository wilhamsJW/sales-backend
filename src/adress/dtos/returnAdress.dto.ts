import { AdressEntity } from "../entities/adress.entity";

export class ReturnAddressDto {
    complement: string;
    numberAndress: number;
    cep: string;

    constructor(address: AdressEntity) {
        this.complement = address.complement
        this.numberAndress = address.numberAndress
        this.cep = address.cep
    }
}