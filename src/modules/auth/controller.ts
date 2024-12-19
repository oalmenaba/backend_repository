import { Request } from "express";
import { IUser } from "../../interface/Auth.interface";
import { AuthServices } from "./services";

export const RegisterController = async(req:Request)=>{
    try {
        const {username, password} = req.body as IUser;
        const user = await new AuthServices().registerService(username,password);
        return {'message': 'Usuario', 'usuario': user}
    } catch (error) {
        throw error;
    }
}