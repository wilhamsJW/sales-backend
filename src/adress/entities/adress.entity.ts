import { CityEntity } from 'src/city/entities/city.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

/** Criando linhas e coluna usando o TypeORM */

@Entity({ name: 'adress' }) // Este é o nome da tabela e o nome do arquivo deve ser igual o da tabela
export class AdressEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'user_id', nullable: false })
    userId: number;

    @Column({ name: 'complement', nullable: false })
    complement: string;

    @Column({ name: 'number' })
    numberAndress: number;

    @Column({ name: 'cep', nullable: false })
    cep: string;

    @Column({ name: 'city_id' })
    cityId: number

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    upDateAt: Date;

    @ManyToOne(() => UserEntity, (user) => user.adresses)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user?: UserEntity

    @ManyToOne(() => CityEntity, (city) => city.adresses)
    @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
    city?: CityEntity
}

/**
 * Explicações Sobre a entie acima
 * 
 * O código apresentado é uma definição de uma entidade chamada "AdressEntity" que será utilizada com o framework TypeORM. Essa entidade representa uma tabela chamada "adress" no banco de dados.

A entidade possui colunas que são mapeadas para os campos correspondentes no banco de dados. Aqui está um resumo breve dos principais elementos do código:

@Entity({ name: 'adress' }): Decorador que define a entidade e especifica o nome da tabela no banco de dados.

@PrimaryGeneratedColumn('rowid'): Decorador que indica que a coluna id será gerada automaticamente e servirá como chave primária. O parâmetro 'rowid' indica que será usado um tipo de identificação específico do banco de dados.

@Column({ name: 'user_id', nullable: false }): Decorador que indica que a coluna userId será mapeada para o campo correspondente no banco de dados. O parâmetro { name: 'user_id', nullable: false } especifica o nome da coluna e que ela não pode ser nula.

@CreateDateColumn({ name: 'created_at' }): Decorador que define uma coluna createAt que será preenchida automaticamente com a data de criação do registro no banco de dados. O parâmetro { name: 'created_at' } especifica o nome da coluna no banco de dados.

@UpdateDateColumn({ name: 'updated_at' }): Decorador que define uma coluna upDateAt que será preenchida automaticamente com a data de atualização do registro no banco de dados. O parâmetro { name: 'updated_at' } especifica o nome da coluna no banco de dados.

Essas são apenas algumas das colunas definidas na entidade. Cada coluna é representada por um decorador @Column que especifica o nome da coluna, tipos de dados e outras opções.

Essa definição de entidade é usada com o TypeORM para realizar operações de mapeamento objeto-relacional (ORM), como criar, consultar, atualizar e excluir registros do banco de dados usando objetos JavaScript.
 */