import { Router } from 'express';

const routes = Router();

routes.use("/users", require("./user-router"));

export { routes };