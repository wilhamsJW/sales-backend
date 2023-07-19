import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from 'src/decorator/role.decorator';
import { UserType } from 'src/user/enum/user.type.num';
import { LoginPayload } from '../auth/dtos/loginPayload.dto';

/** Este arquivo guards consegue ser usado em todas as rotas para gerenciar que tipo de usuário pode acessar determinada rota
 * para usar ele posso ver no adress.controller.ts, mas para usa-lo basta criar um decorator customizado e invocar ele na rota desejada
 * o decorator que estou usando é: @Roles(UserType.User) ele tem um funçao chamada SetMetada() que irá relacinar esses dados e chamará de forma automática
 * a pasta 'guards' invocando o arquivo 'roles.guards' que o mesmo retornará uma promessa como true ou false e esse valor boolena é enxergado pelo NestJS 
 * e ele irá lançar de forma automática uma msg de erro ou deixará o fluxo prosseguir normalmente
 */

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {


    /**
     * Esta função abaixo está recebendo o usuário permitido, ela consegue visulizar esse dado pela chave ROLES_KEY, e assim irá me retornar um array com 
     * os tipos de users permitidos
     */
    const isAllowedUser = this.reflector.getAllAndOverride<UserType[]>(
      ROLES_KEY, // essa chave foi definida no arquivo que foi importado acima, estou passando ela para dentro desta função do NestJS para relacionar os dadose esta função entender de qual role se trata pela chave passada
      [context.getHandler(), context.getClass()], // Fazem parte do contexto de execução de um controlador ou interceptor do Nest.js. Basicamente ele irá intercptar meu request e deciidir se o código continua ou não
    );

    if (!isAllowedUser) {
      return true;
    }

    // Receive the token set in the request
    const { authorization } = context.switchToHttp().getRequest().headers;

    // Verify token
    const loginPayload: LoginPayload | undefined = await this.jwtService
      .verifyAsync(authorization, {
        secret: process.env.JWT_SECRET,
      })
      .catch(() => undefined);

      /**
       * Caso eu queira personalizar a saída de false do meu guards para que mostre uma msg mais exata para o client da minha API, 
       * posso usar o throw new UnauthorizedException(); e passar o objeto que achar melhor
       */
      if (!loginPayload) {
        throw new UnauthorizedException({
          msg: 'Token Inválido'
        });
      }

    return isAllowedUser.some((role) => role === loginPayload.type_user); // validação criada para verificar se o usuário tem permissão, some retorna um valor boolean. 
  }
}





/**
 * A const payload me trás um objeto assim:
 * {
    id: 17,
    type_user: 1,
    iat: 1689442253,
    exp: 1690047053,
 } 

   O campo "iat" representa o timestamp de quando o token JWT foi emitido, enquanto o campo "exp" representa o timestamp de quando o token expirará e não será mais válido.

      * Essas informações podem ser úteis de várias formas:

   1. Verificação da validade do token: Você pode usar o campo "exp" para determinar se o token ainda é válido. Ao receber um token, você pode comparar a data atual com o valor de "exp". Se a data atual for posterior ao valor "exp", isso indica que o token expirou e não deve ser considerado válido. Isso é particularmente útil para garantir que apenas tokens válidos sejam aceitos para autenticação e acesso aos recursos protegidos.

   2. Renovação de token: Se você estiver usando um sistema de renovação de tokens, poderá usar o campo "iat" para verificar se o token é recente o suficiente para ser renovado. Por exemplo, se um token tiver uma duração de validade de uma hora, você pode verificar se o campo "iat" está dentro de um período de tempo aceitável para permitir a renovação do token. Isso ajuda a evitar que tokens antigos ou expirados sejam renovados.

   3. Auditoria e registros: O campo "iat" pode ser usado para fins de auditoria, permitindo rastrear quando um token específico foi emitido. Isso pode ser útil para fins de solução de problemas, análise de segurança ou monitoramento de atividades de autenticação em seu sistema.

   4. Implementação de recursos com tempo limitado: Você pode usar o campo "exp" para controlar o acesso a recursos com tempo limitado. Por exemplo, se você tiver uma funcionalidade que só pode ser acessada por um determinado período de tempo, pode verificar o campo "exp" para permitir ou negar o acesso a esse recurso com base no tempo restante antes da expiração.

   5. Essas são apenas algumas das situações em que as informações "iat" e "exp" podem ser úteis. A maneira exata de usar essas informações depende dos requisitos e das necessidades específicas do seu aplicativo.

 */