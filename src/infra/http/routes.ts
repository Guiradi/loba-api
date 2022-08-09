import { MailTrapMailProvider } from '@providers/implementations/MailTrapMailProvider'
import { UserRouter } from '@routers/UserRouter'
import { CreateUser } from '@useCases/User/CreateUserUseCase'
import { Router } from 'express'
import { PrismaUserDataSource } from 'src/data/infra/prisma/PrismaUserDatasource'

const router = Router()

const userMiddleware = UserRouter(
  new CreateUser(
    new PrismaUserDataSource(),
    new MailTrapMailProvider()
  )
)

router.use('/users', userMiddleware)

export { router }
