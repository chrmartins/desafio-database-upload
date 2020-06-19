import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCategories1592335644849
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Criando a Tabela
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Para desfazer a tabela criada
    await queryRunner.dropTable('categories');
  }
}
