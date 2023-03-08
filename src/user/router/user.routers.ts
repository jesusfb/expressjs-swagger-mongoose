import { Request, Response, Express } from "express";
import UserController from "../controller/user";
import { UserService } from "../service/user";
let router: Express = require("express").Router();
let service;UserService
let controller=new UserController(service);
router.post("/register",controller.register);
router.delete("/user/",controller.deleteById);
router.patch("/user/",controller.editById);
router.get("/user/",controller.findById);
router.get("/users",controller.getAllUsers);
export default router