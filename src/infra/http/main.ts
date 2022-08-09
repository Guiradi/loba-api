/**
 * Baseado na arquitetura: https://github.com/nanosoftonline/clean-architecture-express-contacts/
 */

import { router } from './routes'
import { server } from './server'

(async () => {
  const port = process.env.PORT
  server.use(router)
  server.listen(port, () => console.log(`Server running on port ${port}`))
})()
