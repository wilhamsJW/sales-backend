import { createParamDecorator } from "@nestjs/common/decorators";
import { ExecutionContext } from "@nestjs/common/interfaces";
import { authorizationToLoginPayload } from "src/utils/base-64-converter";


export const UserId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {

        const { authorization } = ctx.switchToHttp().getRequest().headers;

        const loginPayload = authorizationToLoginPayload(authorization)

        return loginPayload?.id
    }
 
  );
  

  /** Este arquivo me retorna os dados do usuário em questão, ou seja o q está logado no sistema, ele pega essas informações pelo token
   *  o token JWT tem um payload q guarda essas informações quando o usuário loga no sistema e esse token deve ser usado na
   * maioria dos requests da minha API que necessitam de identicação do usuário.
   * Ele faz isso especificamente na função: authorizationToLoginPayload() - ela que retorna esses dados
   * 
   * 
   * Este arquivo se trata de um decorator customizado, usamos o 'createParamDecorator' do Nest para criar a função
   * veja mais sobre na doc: https://docs.nestjs.com/custom-decorators
   * Em OVERVIEW / Custom Decorators
   */