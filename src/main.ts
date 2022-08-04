/**
 * Baseado na arquitetura: https://github.com/nanosoftonline/clean-architecture-express-contacts/
 */

import { MailTrapMailProvider } from '@providers/implementations/MailTrapMailProvider'
import { UserRouter } from '@routers/UserRouter'
import { CreateUser } from '@useCases/User/CreateUserUseCase'
import { PrismaUserDataSource } from './data/infra/prisma/PrismaUserDatasource'
import { server } from './server'

(async () => {
  const userMiddleware = UserRouter(
    new CreateUser(
      new PrismaUserDataSource(),
      new MailTrapMailProvider()
    )
  )

  server.use('/users', userMiddleware)
  server.listen(3333, () => console.log('Server running on port 3333'))
})()
