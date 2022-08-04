import { MailTrapMailProvider } from '@providers/implementations/MailTrapMailProvider'
import { PostgresUserRepository } from '@implementations/PostgresUserRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
