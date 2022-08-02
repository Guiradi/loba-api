import { User } from '@entities/User'

test('It should be ok', () => {
  const user = new User({
    name: 'Guilherme',
    email: 'guiponsoni@gmail.com',
    password: 'senha'
  })

  expect(user.name).toEqual('Guilherme')
})
