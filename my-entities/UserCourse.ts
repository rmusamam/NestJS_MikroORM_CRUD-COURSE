import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Course } from './Course';
import { User } from './User';

@Entity()
export class UserCourse {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'uuid' })
  uuid!: string;

  @ManyToOne({ entity: () => User })
  user!: User;

  @ManyToOne({ entity: () => Course })
  course!: Course;

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
