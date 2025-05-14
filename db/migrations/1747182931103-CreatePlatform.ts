import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePlatform1747182931103 implements MigrationInterface {
    name = 'CreatePlatform1747182931103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "PlatformEntity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "manufacture" character varying, CONSTRAINT "PK_c652b3d14e3b739be8ba783a478" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "PlatformEntity"`);
    }

}
