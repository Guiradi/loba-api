import { BaseEntity } from './BaseEntity'
import { Permission } from './Permission'
import { Role } from './Role'

export class User extends BaseEntity {
  public name: string
  public email: string
  public password: string
  public permissions: Permission[]
  public roles: Role[]

  constructor (props: Omit<User, 'id'>, id?: string) {
    super(id)
    Object.assign(this, props)
  }
}

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
}

export interface ILoginUserRequestDTO {
  email: string;
  password: string;
}
