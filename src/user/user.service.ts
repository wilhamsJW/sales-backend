import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';

import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
import { UserType } from './enum/user.type.num';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
     ) {}

    //private users: UserEntity[] = [] // isso aqui só feito para salvar em memória para testes

    async createUser(createUserDto: CreateUserDto, userType?: number): Promise<UserEntity> {
        // Foi adicionado esses dois pontos -> : após o parâmetro pq indica o que é que eu quero que essa função retorne, nesse caso quero retornar o User que
        // está na interface, porém não sei se isso vai retornar de fato, então o JS e o nest reconhece isso com uma Promise e pede pra usar
        // dessa forma: Promise<User> e assim para de apontar o erro dado de sintaxe

        const passwordHashed = await bcrypt.hash(createUserDto.password, 10); 
        // criptografia da senha, instalamos o bycript que recebe dois argumentos o primeiro é a senha  e o segundo    
        // o valor 10 em saltOrRounds define a complexidade da criptografia bcrypt e afeta o tempo e a força necessários para gerar o hash da senha.    

        // esta const abaixo ó estava sendo usado para salvar em memória
        // const user: UserEntity = {
        //     ...createUserDto,
        //     id: this.users.length + 1,
        //     password
        // };
        // insere os dados na minha propriedade privada users, a partir daqui posso enviar ele para qq banco de dados que necessitar
        // this.users.push(user) // usando o this pq o this acessa o dado dessa classe que não está dentro dessa função
        // esse: this.users.push(user) -> só estava sendo usado para salvar em memória juntamente com a linha acima: private users: UserEntity[] = []

        return this.userRepository.save({
            msg: 'User with sucess saved!',
            ...createUserDto,
            password: passwordHashed,
            type_user: userType ? userType : UserType.User, // aqui define o tipo de user q terá acesso ou privliégios a acesar rotas dentro do projeto, está mockado para teste mas o dono do sistema q deve definir isso
        })
    }

    async getAllUser(): Promise<UserEntity[]> {
        //return this.users // usado para retornar uma resposta ao endepoint do get que fica no controller, este users é o de cima que tbm tá comentado
        return this.userRepository.find()
    }

    async findUserByID(userId: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new NotFoundException(`Não encontrado este usário ${userId}`)
        }

        return user
    }

    async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
        return this.userRepository.findOne({
            where: {
                id: userId
            },
            relations: {
                adresses: {
                    city: {
                        nameCityStateRelational: true // aqui configuro essa chave para true, ela q está recebendo dados relacionados
                    }
                }
            }
        })
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            throw new NotFoundException(`Não encontrado este email ${email}`)
        }

        return user
    }
}

/*************************************************************************************************
 * relations -> serve para especificar quais relações devem ser carregadas junto com o usuário.  * 
 * No exemplo, estamos carregando a relação addresses e, dentro dela, a propriedade city.        *
 * Isso significa que, além dos dados do usuário, também queremos carregar os endereços          *
 * associados a esse usuário e, para cada endereço, queremos carregar a cidade associada.        *
 *************************************************************************************************/
