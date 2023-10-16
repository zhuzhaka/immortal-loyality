require("dotenv").config();
import { routes } from "./routes";
import { db } from "./services/db-service";
import express from "express"



const app = express();

app.use("/api", routes);

const start = async () => {
  await db?.authenticate();
  await db?.sync({ alter: true });

  app.listen(5000, "localhost", () => {
    return `server running at http://localhost:5000`;
  })
  .on("error", (err: Error): void => {
    if (err) {
      console.error(err)
    }
  })
} 

start();