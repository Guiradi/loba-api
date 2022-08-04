import { User } from '@entities/User'
import { DatabaseWrapper } from 'src/data/interfaces/dataSources/DatabaseWrapper'
import { IUserDataSource } from 'src/data/interfaces/dataSources/UserDataSource'

export class PostgresUserDataSource implements IUserDataSource {
  constructor (
    private db: DatabaseWrapper
  ) {}

  async save (data: User) {
    await this.db.create({
      data
    })
  };

  async findByEmail (email: string) {
    return await this.db.findUnique({ email })
  };
}
