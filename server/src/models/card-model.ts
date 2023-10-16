import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../services/db-service";


export interface ICardModel extends
  Model<InferAttributes<ICardModel>, InferCreationAttributes<ICardModel>> {
  readonly id: CreationOptional<number>;
  customerId: number;
}

export const CardModel = db.define<ICardModel>("card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  customerId: { type: DataTypes.INTEGER, allowNull: false }
})