import { compare, hash } from 'bcryptjs'
import { BaseEntity } from './BaseEntity'
import { Permission } from './Permission'
import { Role } from './Role'

export interface IUserProps {
  name: string;
  email: string;
  password: string;
}

export class User extends BaseEntity<IUserProps> {
  private readonly passwordIsHashed: Boolean
  public name: string
  public email: string
  public password: string
  public permissions: Permission[]
  public roles: Role[]

  constructor (props: IUserProps, id?: string, passwordIsHashed: Boolean = false) {
    super(props, id)
    Object.assign(this, props)
    this.passwordIsHashed = passwordIsHashed
  }

  public async getHashedPassword (): Promise<string> {
    if (this.passwordIsHashed) {
      return this.password
    }

    return await hash(this.password, 8)
  }

  public async comparePassword (plainTextPassword: string): Promise<boolean> {
    return await compare(plainTextPassword, this.password)
  }
}

export interface ILoginUserRequestDTO {
  email: string;
  password: string;
}
