import { User } from '../domain/user/user'
import { User as PersistenceUser } from '@prisma/client'

export class UserMapper {
  static toDomain (raw: PersistenceUser): User {
    const user = new User(raw, raw.id, true)
    return user
  }

  static async toPersistence (user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: await user.getHashedPassword()
    }
  }
}
