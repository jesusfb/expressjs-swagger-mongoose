import { Request, Response, Express } from "express";
import { UserService } from "../service/user";
import { autoInjectable, injectable } from "tsyringe";
// import { register } from "../service/user";
let router: Express = require("express").Router();
@autoInjectable()
class UserController {
  private  userService: UserService;
  constructor( private  userService: UserService) {
    this.userService = userService;
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
