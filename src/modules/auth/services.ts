import AuthRepository from "./repository";

export class AuthServices {
    private readonly _authRespositoery : AuthRepository
    constructor() {        
         this._authRespositoery = new AuthRepository();
    }
      
    async registerService(username: string, password: string) {
     const existingUser = await this._authRespositoery.findByUsername(username);
     if(existingUser){
         throw new Error('El usuario ya existe')
     }

     const newUser = await this._authRespositoery.createUser({username, password});
     return newUser;

 }
   
}