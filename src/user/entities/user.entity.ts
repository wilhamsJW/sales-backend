import { AdressEntity } from 'src/adress/entities/adress.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

/** Criando linhas e coluna usando o TypeORM */

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'phone' })
    phone: string;

    @Column({ name: 'cpf', nullable: false })
    cpf: string;

    @Column({ name: 'password', nullable: false })
    password: string

    @Column({ name: 'type_user', nullable: false })
    type_user: number

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    upDateAt: Date;

    @OneToMany(() => AdressEntity, (adresses) => adresses.user) // adresses.user -> esse .user foi criado lá na adrees.entity e aqui estou enviado dados para ele para que haja a relaçaõ entre dados
    adresses?: AdressEntity[] // adresses -> é uma chave do meu objeto que irá receber os meus relacionamentos entre tabelas
}

/**
 * Vantagem de ter feito relações com One-to-Many e Many-to-One são:
 * 
 * A definição dessa relação facilita a navegação entre entidades relacionadas e permite que o ORM 
 * carregue automaticamente os dados relacionados quando a entidade principal é buscada do banco de dados, 
 * evitando consultas adicionais para obter os endereços associados ao usuário.
 */