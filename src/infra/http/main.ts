/**
 * Baseado na arquitetura: https://github.com/nanosoftonline/clean-architecture-express-contacts/
 */

import { router } from './routes'
import { server } from './server'

(async () => {
  server.use(router)
  server.listen(3333, () => console.log('Server running on port 3333'))
})()
