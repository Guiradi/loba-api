import { User, IUserProps } from '@entities/User'
import { IMailProvider } from '@providers/interfaces/IMailProvider'
import { IUsersRepository } from '@interfaces/repositories/IUsersRepository'
import { ICreateUserUseCase } from '@interfaces/useCases/User/ICreateUserUseCase'

export class CreateUser implements ICreateUserUseCase {
  constructor (
        private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: IUserProps): Promise<void> {
    const userAlreadyExists = await this.usersRepository.exists(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User(data)

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
  }
}
