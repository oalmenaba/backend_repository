import { CodesHttpEnum } from "../../enum/codesHttpEnum";
import { HttpResponse } from "../../utils/HttpResponse";
import AuthRepository from "./repository";

export class AuthServices {
    private readonly _authRespositoery: AuthRepository
    constructor() {
        this._authRespositoery = new AuthRepository();
    }

    async registerService(username: string, password: string) {
        const existingUser = await this._authRespositoery.findByUserName(username);
        if (existingUser) {
            throw new Error('El usuario ya existe')
        }

        const newUser = await this._authRespositoery.createUser({ username, password });
        return HttpResponse.response(CodesHttpEnum.created, newUser, "Usuario creado con exito");
        //return newUser;

    }

}