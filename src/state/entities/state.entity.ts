import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

/** Criando linhas e coluna usando o TypeORM */

@Entity({ name: 'state' })
export class StateEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: number;

    @Column({ name: 'uf', nullable: false })
    uf: number;

    // @CreateDateColumn({ name: 'created_at' })
    // createAt: Date;

    // @UpdateDateColumn({ name: 'updated_at' })
    // upDateAt: Date;
}

/**
 * Aqui estamos fazendo a busca no meu DB, comentei o CreateDateColumn para que a função no service retornasse apenas os outros sem comentar
 */