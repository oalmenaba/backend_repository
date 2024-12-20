import { Request } from "express";
import { IUser } from "../../interface/Auth.interface";
import { AuthServices } from "./services";


export const RegisterController = async(req:Request)=>{
    try {
        const {username, password} = req.body as IUser;
        return await new AuthServices().registerService(username,password);
    
    } catch (error) {
        throw error;
    }
}