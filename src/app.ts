
import express,{Express} from 'express';
import * as swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./common/manager.ts/config";

const port: number = 8080;
mongoose.connect(db);
const database = mongoose.connection;
database.on("error", (error) => console.error());
database.once("connected", () => console.log("Database Connected"));
const app: Express = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));{{{}}}
const swaggerDocument = require('./../swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/hello",(req,res)=>{
  res.send("Hello world")
})


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });


