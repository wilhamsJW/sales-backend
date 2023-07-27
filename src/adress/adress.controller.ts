import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddres.dto';
import { AdressEntity } from './entities/adress.entity';
import { AdressService } from './adress.service';
import { Roles } from 'src/decorator/role.decorator';
import { UserType } from 'src/user/enum/user.type.num';
import { UserId } from 'src/decorator/user-id.decorator';

@Roles(UserType.User, UserType.Moderator) // Quando adicionado o Roles aqui, o arquivo chamado roles.guards.ts consegue enxergar essa solicitação http, pegando seu header, validado token e fazerndo o que bem entender
    // Esse UserType.User como parãmetro para o @Roles é a definição de qual usuário tem permissão para acessar esta rota ou seja, apenas usuários do tipo User podem acessar esta rota
@Controller('adress')
export class AdressController {

    constructor(private readonly addressService: AdressService) {}

    // Esta rota está protegida por Roles, apenas usuários com permissão irão conseguir acessar ela. o arquivo roles.guards q está gerenciando essa permissão
    // ele irá retornar um valor boolean, se for true ele permite continuar o código, se não ele lanã um erro ao usuário com esta msg "message": "Forbidden resource"

    

    @Post()
    @UsePipes(ValidationPipe) // é o que valida se as informações vindas do body da request e verifica se está com os tipos iguais, como aqui é a rota de endereço, se for enviado no request o CEP como NUMBER irá retornar a msg informando que deve ser uma string
    async createAddress(
        @Body() createAddressDto: CreateAddressDto, 
        @UserId() userId: number): Promise<AdressEntity> {
        return this.addressService.createAddress(createAddressDto, userId)
    }
}

/**
 * Explicação de como esta rota identifica que aquele token enviado no Header pertence a aquele usuário:
 * 
 * 1. Tudo começa no Decorator Roles, ele é chamado nessa linha nesse arquivo: '@Roles(UserType.User, UserType.Moderator)' 
 * passando dois tipos de usuários permitidos pra inserção de endereço
 * 
 * 2. Lá dentro do Decorator Roles, ele recebe esses dados e passa informaçãoes para uma função nativa do Nest chamada SetMetadata
 * 
 * 3. Esta função SetMetadata está passando os tipos de usuários através do parametro definido lá como roles e ainda passa uma chave
 * chamada ROLES_KEY, que serve para identificação para que o arquivo roles.guards enxergue estas informações
 * 
 * 4. Tudo de fato acontece no roles.guards, ele que identifica quem é o usuário usando a lib jwtService,
 * a função que ele tem chamada loginPayload é que é responsável por isso, ela consegue ver quem é o usuário pelas informações guardadas no token quando o usuer loga no sistema
 * 
 * 
 * 
 * 
 * 
    * As informações do usuário estão contidas no próprio token JWT.

    Quando o usuário faz o login com sucesso, o servidor gera um token JWT contendo as informações necessárias para identificar o usuário de forma única e segura. Esse token é assinado digitalmente pelo servidor usando uma chave secreta (que normalmente está armazenada no ambiente, como process.env.JWT_SECRET).

    O token JWT é composto por três partes separadas por pontos (.):

    Header: Contém informações sobre o tipo de token e o algoritmo de assinatura usado.

    Payload: Contém as informações (claims) que descrevem o usuário ou outros dados relevantes. Nesse caso, o id e o type_user do usuário estão incluídos no payload.

    Signature: É a assinatura digital que garante a integridade do token e valida sua autenticidade.

    Quando o usuário faz uma requisição autenticada ao servidor, ele envia o token JWT no cabeçalho da requisição (normalmente usando o cabeçalho Authorization com o valor Bearer <token>). O servidor então usa a biblioteca jwtService para verificar a validade e autenticidade do token.

    Ao verificar o token, a biblioteca decodifica o payload e extrai as informações do usuário que foram armazenadas no token durante o processo de login. Não é necessário fazer uma consulta ao banco de dados para obter essas informações, pois elas já estão disponíveis no token.

    Essa abordagem de autenticação baseada em token é escalável e mais eficiente, pois evita a necessidade de consultas frequentes ao banco de dados para verificar a autenticidade do usuário em cada requisição. As informações relevantes estão encapsuladas no token JWT e podem ser facilmente verificadas pelo servidor sem precisar acessar o banco de dados novamente.
 */