import { autoInjectable as Service } from "tsyringe";
import { IUser } from "../model/user";
import { UserRepository } from "../repository/userRepository";
@Service()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<Array<IUser>> {
    return this.userRepository.findAll();
  }
  async register(data: IUser): Promise<IUser> {
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
