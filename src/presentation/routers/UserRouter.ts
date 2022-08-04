import express, { Request, Response } from 'express'
import { ICreateUserUseCase } from '@interfaces/useCases/User/ICreateUserUseCase'

export function UserRouter (
  createUserUseCase: ICreateUserUseCase
) {
  const router = express.Router()

  router.post('/', async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    try {
      await createUserUseCase.execute({
        name,
        email,
        password
      })

      return res.status(201).send()
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  })

  return router
}
