import {MigrationInterface, QueryRunner} from "typeorm";

export class allTables1700739578726 implements MigrationInterface {
    name = 'allTables1700739578726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "prision" ("id" character varying NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_50420e36b4286521726ca1cd75b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" character varying NOT NULL, "name" character varying NOT NULL, "turno" character varying NOT NULL, "task" character varying NOT NULL, "accessLevel" character varying NOT NULL, "equipament" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "prisionId" character varying, CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jail" ("id" character varying NOT NULL, "capacity" integer NOT NULL, "jailNumber" character varying NOT NULL, "securityLevel" character varying NOT NULL, "confortLevel" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "employeeId" character varying, CONSTRAINT "PK_42ce32306a30aac7b65a59cf2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prisoner" ("id" character varying NOT NULL, "name" character varying NOT NULL, "height" integer NOT NULL, "weight" integer NOT NULL, "age" integer NOT NULL, "nationality" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "jailId" character varying, CONSTRAINT "PK_4c068e32b4930f506885f4f1c7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "criminalrecord" ("id" character varying NOT NULL, "crime" character varying NOT NULL, "sentence" character varying NOT NULL, "section" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "prisonerId" character varying, CONSTRAINT "PK_d0529f07c6ef4f588e9afdc7806" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reabilitationprogram" ("id" character varying NOT NULL, "task" character varying NOT NULL, "timesPerWeek" integer NOT NULL, "duration" character varying NOT NULL, "subjectOfStudy" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "prisonerId" character varying, CONSTRAINT "PK_601c1609ceb890bb69a9865ab27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "admin" boolean NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_b4cb40f7ff2b3afb211e65e2d88" FOREIGN KEY ("prisionId") REFERENCES "prision"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jail" ADD CONSTRAINT "FK_3ae4ba1a1079ab37875f709db72" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prisoner" ADD CONSTRAINT "FK_aa1a63dfa0a7ef64f0a4a325dea" FOREIGN KEY ("jailId") REFERENCES "jail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "criminalrecord" ADD CONSTRAINT "FK_f1fc108eb8486fadba9c98a9225" FOREIGN KEY ("prisonerId") REFERENCES "prisoner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reabilitationprogram" ADD CONSTRAINT "FK_0073dc9cd8cd338d827de6787c7" FOREIGN KEY ("prisonerId") REFERENCES "prisoner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reabilitationprogram" DROP CONSTRAINT "FK_0073dc9cd8cd338d827de6787c7"`);
        await queryRunner.query(`ALTER TABLE "criminalrecord" DROP CONSTRAINT "FK_f1fc108eb8486fadba9c98a9225"`);
        await queryRunner.query(`ALTER TABLE "prisoner" DROP CONSTRAINT "FK_aa1a63dfa0a7ef64f0a4a325dea"`);
        await queryRunner.query(`ALTER TABLE "jail" DROP CONSTRAINT "FK_3ae4ba1a1079ab37875f709db72"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_b4cb40f7ff2b3afb211e65e2d88"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "reabilitationprogram"`);
        await queryRunner.query(`DROP TABLE "criminalrecord"`);
        await queryRunner.query(`DROP TABLE "prisoner"`);
        await queryRunner.query(`DROP TABLE "jail"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "prision"`);
    }

}
