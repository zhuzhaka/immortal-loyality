import { DataTypes } from "sequelize";
import { db } from "../services/db-service";
import { IUserModel } from "./types";

export const UserModel = db.define<IUserModel>("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  refreshToken: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING },
  enabled: { type: DataTypes.BOOLEAN, defaultValue: true },
});
