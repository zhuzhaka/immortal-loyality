import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../services/db-service";

export interface IUserModel extends
  Model<InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>> { 
    readonly id: CreationOptional<number>;
    email: string;
    password: string;
    refreshToken: string;

    name?: string;
    lastName?: string;
    username?: string;
  }

export const UserModel = db.define<IUserModel>("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  refreshToken: { type: DataTypes.STRING }
});