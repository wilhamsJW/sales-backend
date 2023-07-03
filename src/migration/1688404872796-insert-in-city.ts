import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertInCity1688404872796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        INSERT INTO city("id", "name", "state_id_aux") VALUES (10, 'Acrelândia', '1');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (20, 'Assis Brasil', '2');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (30, 'Água Branca', '3');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (40, 'Anadia', '4');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (50, 'Amapá', '5');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (60, 'Calçoene', '6');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (70, 'Alvarães', '7');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (80, 'Amaturá', '8');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (90, 'Abaíra', '9');
        INSERT INTO city("id", "name", "state_id_aux") VALUES (100, 'Abaré', '10');
    `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.city
        `)
    }


}
