import { Sequelize } from "sequelize";
import { ConnectionType, IDBConfig } from "../types/db-service";
import { getDBVariables } from "../utils/env";

function createConnection(config: IDBConfig): ConnectionType {
  let connection: ConnectionType = null;
  try {
    connection = new Sequelize(...Object.values(config));  
  } catch (err) {
    console.error(err);    
  } finally {
    return connection;
  }  
}

const dbVariables = getDBVariables();

const config: IDBConfig = {
  database: dbVariables.database,
  username: dbVariables.username,
  password: dbVariables.password,

  options: {
    dialect: dbVariables.dialect,
    host: dbVariables.host,
    port: dbVariables.port
  }
}

export const db = createConnection(config);