import { ReturnAddressDto } from "src/adress/dtos/returnAdress.dto";
import { UserEntity } from "../entities/user.entity"

export class ReturnUserDto {

    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    adresses?: ReturnAddressDto[]
    
    constructor(userEntityAllUsers: UserEntity) {
        this.id = userEntityAllUsers.id;
        this.name = userEntityAllUsers.name;
        this.email = userEntityAllUsers.email;
        this.phone = userEntityAllUsers.phone;
        this.cpf = userEntityAllUsers.cpf;

        this.adresses = userEntityAllUsers.adresses ? userEntityAllUsers.adresses.map(address => new ReturnAddressDto(address)) : undefined
    }
}

/**
 * Essa class se trata de uma conversão de dados do objeto recebido userEntityAllUsers
 * ele vem com dados que não quero q seja retornado ao meu cliente e então eu construo ele
 * no meu contructor da forma que eu quero e ele tá sendo usado no user.controller e lá tem mais 
 * informaões sobre esta class
 */

