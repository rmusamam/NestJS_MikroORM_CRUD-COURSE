import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Permission {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'uuid' })
  uuid!: string;

  @Property({ columnType: 'text' })
  permissionName!: string;

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
