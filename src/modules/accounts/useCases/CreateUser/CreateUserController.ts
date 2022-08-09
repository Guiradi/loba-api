import { CreateUser } from './CreateUserUseCase'
import { Controller } from '@core/infra/Controller'
import { AccountAlreadyExistsError } from './errors/AccountAlreadyExistsError'
import { clientError, conflict, created, fail, HttpResponse } from '@core/infra/HttpResponse'

type CreateUserControllerRequest = {
    name: string
    email: string
    password: string
}

export class CreateUserController implements Controller {
  constructor (
        private createUser: CreateUser
  ) {}

  async handle (request: CreateUserControllerRequest): Promise<HttpResponse> {
    try {
      // validate inputs

      const { name, email, password } = request

      const result = await this.createUser.execute({
        name,
        email,
        password
      })

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case AccountAlreadyExistsError:
            return conflict(error)
          default:
            return clientError(error)
        }
      } else {
        return created()
      }
    } catch (error) {
      return fail(error)
    }
  }
}
