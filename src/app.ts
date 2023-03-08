
import express,{Express} from 'express';
import "reflect-metadata"
import * as swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./common/manager.ts/config";
import { auth } from './common/middleware/middleware.ts';
import user from './user/router/user.routers';
const port: number = 8000;

mongoose.connect(db);
const database = mongoose.connection;
database.on("error", (error) => console.error());
database.once("connected", () => console.log("Database Connected"));
const app: Express = express();
app.use(cors({ origin: "*" }));
app.use(auth)
app.use('/',user)
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));{{{}}}
const swaggerDocument = require('./../swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });


