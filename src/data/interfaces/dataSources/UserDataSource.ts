import { User } from '@entities/User'

export interface IUserDataSource {
    save(data: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
}
