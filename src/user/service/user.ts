import { IUser } from "../model/user";
import { UserRepository } from "../repository/userRepository";
import { IUserRepository } from "../repository/IUserRepository";
import { autoInjectable as Service, inject } from "tsyringe";
import { IUserService } from "./IUserService";
import {injectable} from "tsyringe";
import "reflect-metadata";
@injectable()
export class UserService implements IUserService {
  constructor(
    @inject("UserRepository") private readonly userRepository: IUserRepository
  ) {}
  public async findAll(): Promise<Array<IUser>> {
    return this.userRepository.findAll();
  }
  public async register(data: IUser): Promise<IUser> {
    return this.userRepository.save(data);
  }
  public async deleteById(id: any) {
    return this.userRepository.deleteOne(id);
  }
  public async findById(id: any) {
    return this.userRepository.findOne(id);
  }
  public async editById(id: any, data: IUser) {
    return this.userRepository.editById(id, data);
  }
}
