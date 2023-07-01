import { Body , Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto'
import { UserService } from './user.service'
import { User } from './interfaces/user.interface'

@Controller('user')
export class UserController {

    // private readonly userService: UserService = 
    // private - me garante o encapsulamento e que esses dados só sejam alterados dentro dessa classe e acessados tbm
    // readonly - O uso do modificador readonly ajuda a garantir a imutabilidade de uma propriedade específica, 
    // impedindo sua modificação acidental, não autorizada ou um mal comportamento do código
    // UserService - é o tipo dele
    constructor(private readonly userService: UserService) {

    }

    // BodyCreateUser - dados do body da requisição
    @Post()
    async createUser(@Body() BodyCreateUser: CreateUserDto): Promise<User> {        
        return this.userService.createUser(BodyCreateUser)
        // Aqui estamos enviando os dados enviados pelo front e enviando para o service que irá armazenalos
        // com this eu acesso as propriedades declaradas da minha classe, essas estão dentro do meu contructor

    } 

    @Get()
    async getAllUser(): Promise<User[]> {
        return this.userService.getAllUser()
    }
}
