import { IModel } from "../models/types";
import jwt from "jsonwebtoken";

/**
 * User service types
 */

export interface IUserService {
  create(email: string, password: string, role: UserRole): Promise<any>;
}

export interface IUserAuthDTO extends IModel {
  email: string;
  refreshToken: string;
}

export interface IUserPublicDTO extends IModel {}

export interface ServiceResponse<T> {
  ok: boolean;
  time: number;
  msg: string;

  data: T;
}

export type UserServiceResponse = ServiceResponse<
  IUserAuthDTO | IUserPublicDTO
> | null;

export type UserRole = "ADMIN" | "READER";

/**
 * Token service types
 */

export interface ITokenService {
  readonly accessSecret: String;
  readonly refreshSecret: String;

  generateTokens(payload: Object);
}
