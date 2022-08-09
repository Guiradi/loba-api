import { IUserProps } from '@entities/User'

export interface ICreateUserUseCase {
    execute(data: IUserProps): Promise<void>
}
