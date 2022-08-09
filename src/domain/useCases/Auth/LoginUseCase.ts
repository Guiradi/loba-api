import { ILoginUserRequestDTO } from '@entities/User'
import { IUsersRepository } from '@interfaces/repositories/IUsersRepository'
import { sign } from 'jsonwebtoken'

export class LoginUseCase {
  constructor (
        private usersRepository: IUsersRepository
  ) {}

  async execute (data: ILoginUserRequestDTO) {
    const user = await this.usersRepository.findByEmail(data.email)

    if (!user) {
      throw new Error('User or password not found.')
    }

    const passwordMatch = await user.comparePassword(data.password)

    if (!passwordMatch) {
      throw new Error('User or password not found.')
    }

    const token = sign({}, process.env.SECRET_JWT, {
      subject: user.id
    })

    return { token }
  }
}
