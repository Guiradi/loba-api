import { Entity } from '@core/domain/Entity'
import { Permission } from '../permission/permission'

export interface EntityProps {
  name: string;
  description: string;
}

export class Role extends Entity<EntityProps> {
  public name: string
  public description: string
  public permissions: Permission[]

  constructor (props: Omit<Role, 'id'>, id?: string) {
    super(id)
    Object.assign(this, props)
  }
}
