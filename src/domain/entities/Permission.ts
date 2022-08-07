import { BaseEntity } from './BaseEntity'

export class Permission extends BaseEntity {
  public name: string
  public description: string

  constructor (props: Omit<Permission, 'id'>, id?: string) {
    super(id)
    Object.assign(this, props)
  }
}
