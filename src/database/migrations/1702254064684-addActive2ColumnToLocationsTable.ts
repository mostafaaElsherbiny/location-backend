import {MigrationInterface, QueryRunner} from "typeorm";

export class addActive2ColumnToLocationsTable1702254064684 implements MigrationInterface {
    name = 'addActive2ColumnToLocationsTable1702254064684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "location" DROP COLUMN "createdAt"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "location"
            ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()
        `);
    }

}
