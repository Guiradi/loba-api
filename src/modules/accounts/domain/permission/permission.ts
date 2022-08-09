import { Entity } from '@core/domain/Entity'

export interface PermissionProps {
  name: string;
  description: string;
}

export class Permission extends Entity<PermissionProps> {
  public name: string
  public description: string

  constructor (props: Omit<Permission, 'id'>, id?: string) {
    super(id)
    Object.assign(this, props)
  }
}
