import { env } from "./env";
import knex, { Knex } from "knex";

export const config: Knex.Config = {
  client: "pg",
  connection: {
    host: env.DATABSE_HOST,
    port: env.DATABASE_PORT,
    user: env.DATABSE_USER,
    password: env.DATABASE_PASSWORD,
  },
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
  useNullAsDefault: true,
};
export const setup = knex(config);
