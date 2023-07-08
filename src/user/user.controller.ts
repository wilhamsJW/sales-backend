import { Body , Controller, Post, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto'
import { UserService } from './user.service'
import { UserEntity } from './entities/user.entity'
import { ReturnUserDto } from './dtos/returnUser.dto'

@Controller('user')
export class UserController {

    // private readonly userService: UserService = 
    // private - me garante o encapsulamento e que esses dados só sejam alterados dentro dessa classe e acessados tbm
    // readonly - O uso do modificador readonly ajuda a garantir a imutabilidade de uma propriedade específica, 
    // impedindo sua modificação acidental, não autorizada ou um mal comportamento do código
    // UserService - é o tipo dele
    constructor(private readonly userService: UserService) {}

    @UsePipes(ValidationPipe) // inserir validação no CreateUserDto e aqui estou informando para que o controller use eles
    @Post()
    async createUser(@Body() BodyCreateUser: CreateUserDto): Promise<UserEntity> {  // BodyCreateUser - dados do body da requisição  
        return this.userService.createUser(BodyCreateUser)
        // Aqui estamos enviando os dados enviados pelo front e enviando para o service que irá armazenalos
        // com this eu acesso as propriedades declaradas da minha classe, essas estão dentro do meu contructor

    } 

    @Get()
    async getAllUser(): Promise<ReturnUserDto[]> {
        return (await this.userService.getAllUser()).map((userEntityAllUsers) => new ReturnUserDto(userEntityAllUsers));
    }
}

/**
 * Explicações sobre a função getAllUser():
 * 
 * Ela retorna meus dados formatados
 * 
 * Este .map((userEntity) => new ReturnUserDto(userEntity)); - ele transforma meus dados gerados em 
 * this.userService.getAllUser(), pq fazer isso? 
 * 
 * O retorno apenas com this.userService.getAllUser(), me retorna esses dados abaixo,
 * 
 *  *     {
        "id": 1,
        "name": "Junior 003",
        "email": "mjunior.wj@hmail.com",
        "phone": "98888888",
        "cpf": "222222",
        "password": "$2b$10$d75.qMLO1i.xAwXZuegGhuXr/o0BV5ZMajulWg0FAfuTl3dWtb80C",
        "type_user": 1,
        "createAt": "2023-07-05T01:39:26.439Z",
        "upDateAt": "2023-07-05T01:39:26.439Z"
    },
 * 
 * 
 * mas aí existe dados sensíveis que não quero que sejam retornado ao cliente, como:
 * password
 * type_user
 * createAt
 * upDateAt
 * pra fazer isso de forma segura e rápida, criei um returnUserDto dentro da pasta DTO e ele retorna apenas as
 * informações necessárias para o cliente
 * 
 * Esta linha: map((userEntity) => new ReturnUserDto(userEntity)
 * transforma cada item do meu array, retirando os dados que eu não desejo q seja retornado de forma prática e limpa
 * a linha acima pega cada item do array e tranforma eles de acordo com o ReturnUserDto que por sua vez recebe
 * os dados enviado por parametro e recria um novo objeto apenas com as informações necessárias
 * usamos o new pq ReturnUserDto é uma classe e toda vez que invocamos ela com o new, criamos uma nova instancia da class
 * para criar um novo objeto e assim recriar nosso array
 * 
 * Agora os dados são retornados assim:
 * 
 *     {
        "id": 1,
        "name": "Junior 003",
        "email": "mjunior.wj@hmail.com",
        "phone": "98888888",
        "cpf": "222222"
    },
 */
