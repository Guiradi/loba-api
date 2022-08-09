import { User } from '@entities/User'

export interface IUsersRepository {
    exists(email: string): Promise<Boolean>;
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
    create(user: User): Promise<void>;
}
