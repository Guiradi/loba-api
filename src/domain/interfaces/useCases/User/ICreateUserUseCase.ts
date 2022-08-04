import { ICreateUserRequestDTO } from '@entities/User'

export interface ICreateUserUseCase {
    execute(data: ICreateUserRequestDTO): Promise<void>
}
