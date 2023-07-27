
import { SetMetadata } from '@nestjs/common';
import { UserType } from 'src/user/enum/user.type.num';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserType[]) => SetMetadata(ROLES_KEY, roles);

/**
 * Este aquivo se comunica de forma direta e automática com o roles.guards.ts, isso acontece por debaixo dos panos no nestJS
 */

/**
 * Pq que uso o operador spreed na função: (...roles: UserType[]) ??? Para que a função possa receber múltiplos arqgumentos e agrupalos há um só array
 * coloquei dois arqgumento lá no adress.controller para melhor entendimento
 * 
 * export const ROLES_KEY = 'roles';: Aqui é definida uma constante chamada ROLES_KEY que será usada como chave para os metadados 
 * associados ao decorador Roles. Essa chave será usada para identificar os metadados relacionados aos papéis ou funções (roles) 
 * exigidos para acessar uma determinada rota protegida pelo guard.
 * 
 * 
 * export const Roles = (...roles: UserType[]) => SetMetadata(ROLES_KEY, roles);: Nesta linha, o decorador personalizado Roles é definido. 
 * Ele é uma função que recebe como parâmetro um ou mais valores do tipo UserType[] (que, a partir do nome, podemos supor que são papéis
 * ou funções de usuário) e utiliza o SetMetadata para associar esses valores recebidos a chave passada pra ele que é ROLES_KEY e essa chave está sendo usada no role.guards.ts
 */