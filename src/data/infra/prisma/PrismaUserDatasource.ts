import { User } from '@entities/User'
import { prisma } from '@infra/prisma/client'
import { IUserDataSource } from 'src/data/interfaces/dataSources/UserDataSource'
import { UserMapper } from 'src/domain/mappers/UserMapper'

export class PrismaUserDataSource implements IUserDataSource {
  async exists (email: string) {
    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return !!userExists
  };

  async findByEmail (email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {
      return null
    }

    return UserMapper.toDomain(user)
  };

  async save (user: User) {
    const data = await UserMapper.toPersistence(user)
    await prisma.user.update({ where: { id: user.id }, data })
  };

  async create (user: User) {
    const data = await UserMapper.toPersistence(user)
    await prisma.user.create({ data })
  };
}
