import { IUser } from '../../interface/Auth.interface';

const users: IUser[] = [];

export default class AuthRepository {
    /* constructor(parameters) {        
    } */
    
    async  createUser(user:IUser): Promise<IUser> {
        users.push(user);
        return user;

    }

    async  findByUsername(username:string): Promise<IUser | undefined>  {
      
        return users.find( (user)=>{
            return user.username  == username 
        } );
    }
}