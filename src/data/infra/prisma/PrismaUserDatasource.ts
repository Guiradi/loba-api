import { User } from '@entities/User'
import { prisma } from '@infra/prisma/client'
import { IUserDataSource } from 'src/data/interfaces/dataSources/UserDataSource'

export class PrismaUserDataSource implements IUserDataSource {
  async save (data: User) {
    await prisma.user.create({ data })
  };

  async findByEmail (email: string) {
    return await prisma.user.findUnique({
      where: {
        email
      }
    })
  };
}
