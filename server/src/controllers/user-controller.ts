import { NextFunction, Request, Response } from "express";
import { IUserController } from "../types/user";
import { IUserModel } from "../models/user-model";

class UserController implements IUserController{
  async login(req: Request, res: Response, next: NextFunction) {

  }
}

export default new UserController();