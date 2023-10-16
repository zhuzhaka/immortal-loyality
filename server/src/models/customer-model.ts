import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../services/db-service";


export interface ICustomerModel extends Model<InferAttributes<ICustomerModel>, InferCreationAttributes<ICustomerModel>> {
  readonly id: CreationOptional<number>;  
}

export const CustomerModel = db.define<ICustomerModel>("customer", {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});