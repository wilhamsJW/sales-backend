import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {

    private users: User[] = []
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        // Foi adicionado esses dois pontos -> : após o parâmetro pq indica o que é que eu quero que essa função retorne, nesse caso quero retornar o User que
        // está na interface, porém não sei se isso vai retornar de fato, então o JS e o nest reconhece isso com uma Promise e pede pra usar
        // dessa forma: Promise<User> e assim para de apontar o erro dado de sintaxe
        return {
            ...createUserDto,
            id: 12
        }
    }
}
