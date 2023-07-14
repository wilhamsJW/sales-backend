import { CityEntity } from 'src/city/entities/city.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

/** Criando linhas e coluna usando o TypeORM */

@Entity({ name: 'state' })
export class StateEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'uf' })
    uf: number;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    upDateAt: Date;

    @OneToMany(() => CityEntity, (city) => city.nameCityStateRelational)
    cities?: CityEntity[]
}

/**
 * Aqui estamos fazendo a busca no meu DB, comentei o CreateDateColumn para que a função no service retornasse apenas os outros sem comentar
 */