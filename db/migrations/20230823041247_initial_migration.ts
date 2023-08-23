import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("recipe", (table) => {
    table.uuid("id").primary;
    table.text("diet_name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable;
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("recipe");
}
