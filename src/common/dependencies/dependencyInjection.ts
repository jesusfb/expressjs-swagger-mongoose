import * as user from "../../user/service/user";
import "reflect-metadata";
import { container } from "tsyringe";
import { UserRepository } from "../../user/repository/userRepository";
import { IUserRepository } from "../../user/repository/IUserRepository";
import { IUserService } from "../../user/service/IUserService";
import { UserService } from "../../user/service/user";

export default function init(){

    container.register<IUserRepository>("UserRepository", {
      useClass: UserRepository,
    });
    container.register<IUserService>(UserService, {
      useClass: UserService,
    });
}

