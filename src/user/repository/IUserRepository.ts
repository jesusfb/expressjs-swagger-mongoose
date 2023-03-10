import { IUser } from "../model/user";
export interface IUserRepository {
  findAll(): Promise<Array<IUser>>;
  save(params: IUser): Promise<IUser>;
  deleteOne(id:any):any;
  findOne(id:any):Promise<any>;
  editById(id:any, data:any):Promise<any>;
}
