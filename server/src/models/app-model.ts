import { CreationOptional } from "sequelize";


export interface IAppModel {
  readonly id: CreationOptional<number>;
}