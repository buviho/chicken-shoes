import { MigrationInterface, QueryRunner } from 'typeorm';

export class createShoesTable1658993643955 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`     
            DROP TABLE IF EXISTS public.shoes;      
            DROP TYPE IF EXISTS shoes_status; 
            DROP TYPE IF EXISTS brand_name;          
            CREATE TYPE shoes_status AS ENUM('ACTIVE', 'INACTIVE');
            CREATE TYPE brand_name AS ENUM('NIKE', 'ADIDAS', 'PUMA', 'JORDAN');
            CREATE TABLE public.shoes (
                id uuid NOT NULL DEFAULT gen_random_uuid(),
                name varchar(100) NOT NULL,
                code varchar(30) NOT NULL,
                image_url varchar NOT NULL,
                brand brand_name NOT NULL DEFAULT 'NIKE',
                size decimal NOT NULL,
                price integer NOT NULL,
                total integer NOT NULL DEFAULT 0,
                description text NULL,
                status shoes_status NOT NULL DEFAULT 'INACTIVE',
                created_at timestamp NOT NULL DEFAULT now(),
                updated_at timestamp NOT NULL DEFAULT now()
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE IF EXISTS shoes;
            DROP TYPE IF EXISTS shoes_status;
            DROP TYPE IF EXISTS brand_name;
        `);
  }
}
