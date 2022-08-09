import express from 'express'
import { config } from 'dotenv-flow'

config({ silent: true })

const server = express()
server.use(express.json())

export { server }
