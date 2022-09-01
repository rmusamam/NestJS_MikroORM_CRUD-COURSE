import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class RolePermission {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'uuid' })
  uuid!: string;

  @Property()
  roleId!: number;

  @Property()
  permissionId!: number;

  @Property({ default: true })
  recordStatus: boolean = true;

  @Property({ columnType: 'date' })
  createdAt!: string;

  @Property({ columnType: 'text' })
  createdBy!: string;

  @Property({ columnType: 'date' })
  updatedAt!: string;

  @Property({ columnType: 'date' })
  deletedAt!: string;

}
