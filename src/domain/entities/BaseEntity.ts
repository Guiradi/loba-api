import { v4 as uuid } from 'uuid'

export abstract class BaseEntity<T> {
  public readonly id: string
  public readonly props: T

  public createdAt: Date
  public updatedAt: Date

  constructor (props, id?: string) {
    this.id = id || uuid()
    this.props = props
  }
}
