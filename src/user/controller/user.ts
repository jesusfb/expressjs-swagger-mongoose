import { Request, Response, Express } from "express";
import { IUserService } from "../service/IUserService";
import { UserService } from "../service/user";
import "reflect-metadata";
import { autoInjectable, inject } from "tsyringe";
let router: Express = require("express").Router();
import {injectable} from "tsyringe";
@injectable()
class UserController {
  constructor(@inject("UserService") private  userService: IUserService) {
    // this.userService=UserService
  }
  async getAllUsers(_req: Request, res: Response) {
    const result = await this.userService.findAll();
    return res.json(result);
  }
  async findById(req: Request, res: Response) {
    const result = await this.userService.findById(req.params.id);
    return res.json(result);
  }
  async editById(req: Request, res: Response) {
    const result = await this.userService.editById(req.params.id, req.body);
    return res.json(result);
  }
  async deleteById(req: Request, res: Response) {
    const result = await this.userService.deleteById(req.params.id);
    return res.json(result);
  }
  async register(req: Request, res: Response) {
    const result = await this.userService.deleteById(req.params.id);
    return res.json(result); 
  }
}
export default UserController;
