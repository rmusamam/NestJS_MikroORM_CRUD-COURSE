import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';

@Entity()
export class Role {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'uuid' })
  uuid!: string;

  @ManyToOne({ entity: () => User })
  user!: User;

  @Property({ columnType: 'text' })
  roleName!: string;

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
