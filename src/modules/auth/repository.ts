import { IUser } from "../../interfaces/Auth.interface";
import fs from 'fs/promises'
import path from 'path'

const users: IUser[] = []

export default class AuthRepository {
  async createUser(user: IUser): Promise<IUser> {
    users.push(user)
    return user
  }

  async findByUserName(username: string) {
    return users.find(u => u.username.toLocaleLowerCase() === username.toLocaleLowerCase())
  }

}