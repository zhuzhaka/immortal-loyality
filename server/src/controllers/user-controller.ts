import { NextFunction, Request, Response } from "express";
import { IUserController } from "./types";
import { UserService } from "../services/user-service";
import { UserServiceResponse } from "../services/types";

class UserController implements IUserController {
  async login(req: Request, res: Response, next: NextFunction) {}

  async create(req: Request, res: Response, next: NextFunction) {
    let response = null;
    try {
      const { email, password, role } = req.body;
      const user: UserServiceResponse = await UserService.create(
        email,
        password,
        role
      );

      if (user) {
        response = res.status(200).json(user);
      }
    } catch (err) {
      response = res.status(err.status).json(err.message);
    } finally {
      if (response === null) {
        response = res.status(500).json("internal error");
      }
      return response;
    }
  }
}

export default new UserController();
