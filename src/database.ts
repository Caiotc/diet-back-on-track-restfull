import { number } from "zod";
import { env } from "./env";
import knex, { Knex } from "knex";

console.log("env.DATABASE_PORT", env.DATABASE_PORT);
export const config: Knex.Config = {
  client: "pg",
  connection: {
    connectionString: env.DATABASE_CONNECTION_STRING,
    host: env.DATABASE_HOST,
    port: Number.parseInt(env.DATABASE_PORT),
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: "dbt-db",
  },
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
  useNullAsDefault: true,
};
export const setup = knex(config);
