import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Course } from './Course';
import { User } from './User';

@Entity()
export class Assignment {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'uuid' })
  uuid!: string;

  @Property({ columnType: 'text' })
  assignmentTitle!: string;

  @Property({ columnType: 'text' })
  assignmentDescription!: string;

  @Property({ columnType: 'date' })
  announceDate!: string;

  @Property({ columnType: 'date' })
  dueDate!: string;

  @Property({ columnType: 'time', length: 6 })
  dueTime!: string;

  @ManyToOne({ entity: () => Course })
  course!: Course;

  @ManyToOne({ entity: () => User })
  user!: User;

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
