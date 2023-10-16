import { Dialect, Options, Sequelize } from "sequelize";

export interface IDBConfig {
  database: string;
  username: string; 
  password: string;

  options?: Options;
}

export interface IDBEnvVariables {
  database: string,
  username: string,
  password: string,
  dialect: Dialect,
  host: string,
  port: number
}

export type ConnectionType = Sequelize | null;