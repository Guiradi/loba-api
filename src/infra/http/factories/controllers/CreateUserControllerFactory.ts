import { Controller } from 'src/core/infra/Controller'
import { MailTrapMailProvider } from '@providers/implementations/MailTrapMailProvider'
import { PrismaUsersRepository } from 'src/modules/accounts/repositories/prisma/PrismaUsersRepository'
import { CreateUser } from 'src/modules/accounts/useCases/CreateUser/CreateUserUseCase'
import { CreateUserController } from 'src/modules/accounts/useCases/CreateUser/CreateUserController'

export function makeCreateUserController (): Controller {
  const prismaUserRepository = new PrismaUsersRepository()
  const mailTrapProvider = new MailTrapMailProvider()
  const createUser = new CreateUser(prismaUserRepository, mailTrapProvider)

  const createUserController = new CreateUserController(createUser)

  return createUserController
}
