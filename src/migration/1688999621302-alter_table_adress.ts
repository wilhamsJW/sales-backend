import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTableAdress1688999621302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                CREATE TABLE public.adress(
                    id integer NOT NULL,
                    user_id integer NOT NULL,
                    complement character varying,
                    number integer ,
                    cep character varying NOT NULL,
                    city_id integer NOT NULL,
                    created_at timestamp without time zone DEFAULT now() NOT NULL,
                    updated_at timestamp without time zone DEFAULT now() NOT NULL,
                    primary key (id),
                    foreign key (user_id) references public.user(id),
                    foreign key (city_id) references public.city(id)
                );
                
                CREATE SEQUENCE public.adress_id_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                    
                ALTER SEQUENCE public.adress_id_seq OWNED BY public.adress.id;
                
                ALTER TABLE ONLY public.adress ALTER COLUMN id SET DEFAULT nextval('public.adress_id_seq'::regClass);
            `);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                drop table public.adress;
            `);
      }

}
