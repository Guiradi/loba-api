import { Router } from 'express'
import { createUserController } from 'src/domain/useCases/User/Create'

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

export { router }
