import { BaseEntity } from './BaseEntity'

export class User extends BaseEntity {
  public name: string
  public email: string
  public password: string

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
