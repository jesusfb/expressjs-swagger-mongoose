import { IUser } from "../model/user";

export interface IUserService {
    findAll(): Promise<Array<IUser>>;
    register(data: IUser): Promise<IUser> ;
    deleteById(id: any):Promise<any> 
    findById(id: any) :Promise<IUser> 
    editById(id: any, data: IUser): Promise<IUser> 
}