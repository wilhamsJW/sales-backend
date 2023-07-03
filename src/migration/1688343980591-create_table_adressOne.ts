import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableAdressOne1688343980591 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                CREATE TABLE public.adressOne(
                    id integer NOT NULL,
                    user_id integer NOT NULL,
                    complement character varying,
                    number integer NOT NULL,
                    cep character varying NOT NULL,
                    city_id integer NOT NULL,
                    created_at timestamp without time zone DEFAULT now() NOT NULL,
                    updated_at timestamp without time zone DEFAULT now() NOT NULL,
                    primary key (id),
                    foreign key (user_id) references public.user(id),
                    foreign key (city_id) references public.city(id)
                );
                
                CREATE SEQUENCE public.adressOne_id_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                    
                ALTER SEQUENCE public.adressOne_id_seq OWNED BY public.adressOne.id;
                
                ALTER TABLE ONLY public.adressOne ALTER COLUMN id SET DEFAULT nextval('public.adressOne_id_seq'::regClass);
            `);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                drop table public.adressOne;
            `);
      }

}
