import { autoInjectable as MongoRepository, inject } from "tsyringe";
import "reflect-metadata";

import { Model } from "mongoose";
import User, { IUser } from "../model/user";
import { IUserRepository } from "./IUserRepository";

@MongoRepository()
export class UserRepository implements IUserRepository {
  constructor(private userModel: Model<IUser>) {
    this.userModel = User;
  }
  public async deleteOne(id: any) {
    return await this.userModel.deleteOne({ _id: id });
  }
  public async findOne(id: any) {
    return await this.userModel.findOne({ _id: id });
  }
  public async findAll(): Promise<Array<IUser>> {
    return await this.userModel.find();
  }
  public async save(params: IUser): Promise<IUser> {
    const data = new this.userModel(params);
    return await data.save();
  }
  public async editById(id, data) {
    return await this.userModel.updateOne({ _id: id }, data);
  }
}
