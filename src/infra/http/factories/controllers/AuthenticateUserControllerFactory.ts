import { Controller } from '@core/infra/Controller'
import { PrismaUsersRepository } from 'src/modules/accounts/repositories/prisma/PrismaUsersRepository'
import { AuthenticateUserController } from 'src/modules/accounts/useCases/AuthenticateUser/AuthenticateUserController'
import { AuthenticateUser } from 'src/modules/accounts/useCases/AuthenticateUser/AuthenticateUserUseCase'

export function makeAuthenticateUserController (): Controller {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticateUser = new AuthenticateUser(prismaUsersRepository)
  const authenticateUserController = new AuthenticateUserController(
    authenticateUser
  )

  return authenticateUserController
}
