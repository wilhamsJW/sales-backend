import { LoginPayload } from "src/auth/dtos/loginPayload.dto"

export const authorizationToLoginPayload = (authorization: string): LoginPayload | undefined => { // LoginPayload | undefined  isto se trata do retorno da minha função, retornará o que tiver em loginPayload ou undefined, tbm irá retornar o q coloquei no return abaixo + o loginPayload em um único objeto
    const authorizationSplited = authorization.split('.');

    if (authorization.length < 3 || !authorization[1]) {
        return undefined
    }

    return JSON.parse(Buffer.from(authorizationSplited[1], 'base64').toString('utf8'))
}

/**
 * BUFFER -> O objeto Buffer é um objeto global no Node.js e não é necessário importá-lo usando a require palavra-chave.
 * 
 * Estou usando o buffer para decodificar a parte do token JWT e obter o conteúdo original desse token, que é então convertido em um objeto JavaScript por meio do JSON.parse()
 * 
 * Isso pode ser útil em uma situação que não tenho acesso ao obj original do token mas preciso saber informações sobre ele
 * como o dia q ele nasceu e o dia da expiração, caso queira usar isso em alguma parte do código
 * 
 * 
 * 
 * Buffer.from(authorizationSplited[1], 'base64') -> transforma em byte para que se consiga ler e extratir os dados
 * .toString('utf8') -> converte em string usando a utf8 que entender basicamente todos os caracteres de qq idioma
 * JSON.parse() -> tranforma tudo o que tem dentro dele para um obj JS
 * 
 * **********************************************************************************************
 * Por fim este arquivo retorna os dados do token, especificamente os dados do payload do token, 
 * no payload do token contém informações sobre id do usuários e outras informações que foram 
 * guardadas na hora q o user loga e recebe um token criado por minha API
 * **********************************************************************************************
 */