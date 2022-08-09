import { Either, left, right } from '@core/logic/Either'
import { IMailProvider } from '@providers/models/IMailProvider'
import { User } from '../../domain/user/user'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { AccountAlreadyExistsError } from './errors/AccountAlreadyExistsError'

type CreateUserRequest = {
    name: string
    email: string
    password: string
}

type CreateUserResponse = Either<AccountAlreadyExistsError, User>

export class CreateUser {
  constructor (
          private usersRepository: IUsersRepository,
      private mailProvider: IMailProvider
  ) {}

  async execute (data: CreateUserRequest): Promise<CreateUserResponse> {
    // Validate inputs
    const user = new User(data)

    const userAlreadyExists = await this.usersRepository.exists(user.email)

    if (userAlreadyExists) {
      return left(new AccountAlreadyExistsError(user.email))
    }

    await this.usersRepository.create(user)

    await this.mailProvider.sendMail({
      to: {
        email: data.email,
        name: data.name
      },
      from: {
        name: 'Nome do remetente',
        email: 'email@remetente.com.br'
      },
      subject: 'LOBA: Welcome!',
      body: '<p>Welcome message!</p>'
    })

    return right(user)
  }
}
