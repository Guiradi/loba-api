import { adaptMiddleware } from '@core/infra/adapters/ExpressMiddlewareAdapter'
import { adaptRoute } from '@core/infra/adapters/ExpressRouteAdapter'
import { Router } from 'express'
import { makeCreateUserController } from '../factories/controllers/CreateUserControllerFactory'
import { makeEnsureAuthenticatedMiddleware } from '../factories/middlewares/EnsureAuthenticatedMiddlewareFactory'

const usersRouter = Router()

usersRouter.use(adaptMiddleware(makeEnsureAuthenticatedMiddleware()))

usersRouter.post('/', adaptRoute(makeCreateUserController()))

export { usersRouter }
