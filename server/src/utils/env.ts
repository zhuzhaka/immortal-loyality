import { Dialect } from "sequelize"
import { IDBEnvVariables } from "../types/db-service"

export function getDBVariables() {
  const {
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_DIALECT,
    DB_HOST,
    DB_PORT
  } = process.env

  const obj: IDBEnvVariables = {
    database: DB_NAME as string,
    username: DB_USER as string,
    password: DB_PASSWORD as string,
    dialect: DB_DIALECT as Dialect,
    host: DB_HOST as string,
    port: Number(DB_PORT)
  }
  
  return obj;
}