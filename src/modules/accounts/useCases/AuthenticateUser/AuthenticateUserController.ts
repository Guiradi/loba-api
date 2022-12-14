import { Controller } from '@core/infra/Controller'
import { clientError, fail, HttpResponse, ok } from '@core/infra/HttpResponse'
import { AuthenticateUser } from './AuthenticateUserUseCase'

type AuthenticateUserControllerRequest = {
    email: string
    password: string
}

export class AuthenticateUserController implements Controller {
  constructor (private authenticateUser: AuthenticateUser) {}

  async handle ({
    email,
    password
  }: AuthenticateUserControllerRequest): Promise<HttpResponse> {
    try {
      // Validation

      const result = await this.authenticateUser.execute({ email, password })

      if (result.isLeft()) {
        const error = result.value

        return clientError(error)
      } else {
        const { token } = result.value

        return ok({ token })
      }
    } catch (error) {
      return fail(error)
    }
  }
}
