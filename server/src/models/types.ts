import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface IModel {
  readonly id: CreationOptional<number> | number;
  readonly modelName?: string;
}

/**
 * User model types
 */

export interface IUser extends IModel {
  email: string;
  password: string;
  refreshToken: string;

  role: string;
  enabled: boolean;

  name?: string;
  lastName?: string;
  username?: string;
}

export interface IUserModel
  extends IUser,
    Model<InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>> {}

export const USER_MODEL_NAME = "users";

/**
 * App model types
 */

export interface IApp extends IModel {
  appName: string;
  appToken: string;
  tokenBirthday: Date;
}

export interface IAppModel
  extends IApp,
    Model<InferAttributes<IAppModel>, InferCreationAttributes<IAppModel>> {}

export const APP_MODEL_NAME = "app";
