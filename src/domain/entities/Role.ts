import { BaseEntity } from './BaseEntity'
import { Permission } from './Permission'

export class Role extends BaseEntity {
  public name: string
  public description: string
  public permissions: Permission[]

  constructor (props: Omit<Role, 'id'>, id?: string) {
    super(id)
    Object.assign(this, props)
  }
}
