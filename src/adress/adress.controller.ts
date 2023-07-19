import { Controller, Post, UsePipes, ValidationPipe, Param, Body } from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddres.dto';
import { AdressEntity } from './entities/adress.entity';
import { AdressService } from './adress.service';
import { Roles } from 'src/decorator/role.decorator';
import { UserType } from 'src/user/enum/user.type.num';

@Controller('adress')
export class AdressController {

    constructor(private readonly addressService: AdressService) {}

    // Esta rota está protegida por Roles, apenas usuários com permissão irão conseguir acessar ela. o arquivo roles.guards q está gerenciando essa permissão
    // ele irá retornar um valor boolean, se for true ele permite continuar o código, se não ele lanã um erro ao usuário com esta msg "message": "Forbidden resource"

    @Roles(UserType.User, UserType.Moderator) // Quando adicionado o Roles aqui, o arquivo chamado roles.guards.ts consegue enxergar essa solicitação http, pegando seu header, validado token e fazerndo o que bem entender
    // Esse UserType.User como parãmetro para o @Roles é a definição de qual usuário tem permissão para acessar esta rota ou seja, apenas usuários do tipo User podem acessar esta rota

    @Post('/:userId')
    async createAddress(@Body() createAddressDto: CreateAddressDto, @Param('userId') userId: number): Promise<AdressEntity> {
        return this.addressService.createAddress(createAddressDto, userId)
    }
}