import { User } from '@entities/User'
// import { DatabaseWrapper } from 'src/data/interfaces/dataSources/DatabaseWrapper'
import { IUserDataSource } from 'src/data/interfaces/dataSources/UserDataSource'

export class PostgresUserDataSource implements IUserDataSource {
  private users: User[] = []
  constructor (
    // private db: DatabaseWrapper
  ) {}

  async save (data: User) {
    await this.users.push(data)
  };

  async findByEmail (email: string) {
    return await this.users.find(user => user.email === email)
  };
}
