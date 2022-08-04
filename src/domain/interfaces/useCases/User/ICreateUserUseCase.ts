import { ICreateUserRequestDTO } from '@entities/User/CreateUserDTO'

export interface ICreateUserUseCase {
    execute(data: ICreateUserRequestDTO): Promise<void>
}
