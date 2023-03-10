import express, { Express } from "express";
import { auth } from "./common/middleware/middleware";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import db from "./common/manager.ts/config";
import user from "./user/router/user.routers";
import init from "./common/dependencies/dependencyInjection";
const initialize= init()
const port: number = 8000;
var options = {
  explorer: true,
};
mongoose.connect(db);
const database = mongoose.connection;
database.on("error", (error) => console.error());
database.once("connected", () => console.log("Database Connected"));
const app: Express = express();
app.use(cors({ origin: "*" }));
const swaggerDocument = require("./../swagger.json");

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);
  app.use(auth);
  app.use("/", user);
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
  app.use(morgan("tiny"));
  app.use(express.static("public"));