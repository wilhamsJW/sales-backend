import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {

    private users: User[] = []
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        // Foi adicionado esses dois pontos -> : após o parâmetro pq indica o que é que eu quero que essa função retorne, nesse caso quero retornar o User que
        // está na interface, porém não sei se isso vai retornar de fato, então o JS e o nest reconhece isso com uma Promise e pede pra usar
        // dessa forma: Promise<User> e assim para de apontar o erro dado de sintaxe

        const password = await bcrypt.hash(createUserDto.password, 10); 
        // criptografia da senha, instalamos o bycript que recebe dois argumentos o primeiro é a senha  e o segundo    
        // o valor 10 em saltOrRounds define a complexidade da criptografia bcrypt e afeta o tempo e a força necessários para gerar o hash da senha.    

        const user: User = {
            ...createUserDto,
            id: this.users.length + 1,
            password
        };
        this.users.push(user) // usando o this pq o this acessa o dado dessa classe que não está dentro dessa função

        return {
            ...createUserDto,
            password,
            id: 12
        }
    }
}
