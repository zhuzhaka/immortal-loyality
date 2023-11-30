import { IModel, IUser, USER_MODEL_NAME } from "../models/types";
import { IUserAuthDTO } from "../services/types";

export class UserAuthDTO implements IUserAuthDTO {
  constructor(model: IUser) {
    this.id = model.id;
    this.email = model.email;
    this.refreshToken = model.refreshToken;
    this.modelName = USER_MODEL_NAME;
  }

  id: number;
  email: string;
  refreshToken: string;
  modelName?: string;
}
