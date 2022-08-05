import { v4 as uuid } from 'uuid'

export class BaseEntity {
  public readonly id: string

  public createdAt: Date
  public updatedAt: Date

  constructor (id) {
    if (!id) {
      this.id = uuid()
    }
  }
}
