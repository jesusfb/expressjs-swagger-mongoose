import { Request, Response, Express } from "express";
import { Get, Route } from "tsoa";

import UserController from "../controller/user";
import { container } from "tsyringe";
let router: Express = require("express").Router();
const controller = container.resolve(UserController);

router.post("/register", controller.register);
router.delete("/user/", controller.deleteById);
router.patch("/user/", controller.editById);
router.get("/user/", controller.findById);
router.get("/users", controller.getAllUsers);
export default router;
