import { DataTypes } from "sequelize";
import { db } from "../services/db-service";
import { IAppModel } from "./types";

export const AppModel = db.define<IAppModel>("app", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  appToken: { type: DataTypes.STRING },
  appName: { type: DataTypes.STRING, allowNull: false, unique: true },
  tokenBirthday: { type: DataTypes.DATE },
});
