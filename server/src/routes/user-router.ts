import { Router } from "express";
import userController from "../controllers/user-controller";

const userRouter = Router();

userRouter.get("/auth", userController.login);
userRouter.post("/create", userController.create);

module.exports = userRouter;
