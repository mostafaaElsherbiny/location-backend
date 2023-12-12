import {MigrationInterface, QueryRunner} from "typeorm";

export class addActive2ColumnToLocationsTable1702241598989 implements MigrationInterface {
    name = 'addActive2ColumnToLocationsTable1702241598989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "location" (
                "id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "title" character varying NOT NULL,
                "latitude" double precision NOT NULL,
                "longitude" double precision NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "imageId" integer,
                CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "image" (
                "id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "url" character varying NOT NULL,
                CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "location"
            ADD CONSTRAINT "FK_7bb9405127d605ffdb2cb6a5820" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "location" DROP CONSTRAINT "FK_7bb9405127d605ffdb2cb6a5820"
        `);
        await queryRunner.query(`
            DROP TABLE "image"
        `);
        await queryRunner.query(`
            DROP TABLE "location"
        `);
    }

}
