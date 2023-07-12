import { AdressEntity } from 'src/adress/entities/adress.entity';
import { StateEntity } from 'src/state/entities/state.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

/** Criando linhas e coluna usando o TypeORM */

@Entity({ name: 'city' })
export class CityEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'state_id', nullable: false })
    stateId: number;

    @Column({ name: 'state_id_aux', nullable: false })
    stateIdAux: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    upDateAt: Date;

    @OneToMany(() => AdressEntity, (adresses) => adresses.city)
    adresses?: AdressEntity[]

    @ManyToOne(() => StateEntity, (state) => state.cityAndStateRelational)
    @JoinColumn({ name: 'state_id', referencedColumnName: 'id' })
    cityAndStateRelational?: CityEntity
}