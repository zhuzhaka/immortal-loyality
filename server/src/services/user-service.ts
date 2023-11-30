import { UserAuthDTO } from "../dtos/user-dto";
import { ApiError } from "../exceptions/api-error";
import { UserModel } from "../models";
import { IUser } from "../models/types";
import { IUserService, UserRole, UserServiceResponse } from "./types";

class _UserService implements IUserService {
  async create(
    email: string,
    password: string,
    role: UserRole
  ): Promise<UserServiceResponse> {
    const existUser: IUser = await UserModel.findOne({ where: { email } });
    if (existUser) {
      throw ApiError.BadRequest(`user with email '${email}' is already exist`);
    }

    const user: IUser = await UserModel.create({
      email,
      password,
      role: role || "READER",
    });

    return {
      data: new UserAuthDTO(user),
      ok: true,
      time: Date.now(),
      msg: `user with email ${email} succesfully created`,
    };
  }
}

export const UserService = new _UserService();
