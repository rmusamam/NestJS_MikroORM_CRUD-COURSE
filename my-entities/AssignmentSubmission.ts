import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Assignment } from './Assignment';
import { User } from './User';

@Entity()
export class AssignmentSubmission {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'uuid' })
  uuid!: string;

  @ManyToOne({ entity: () => Assignment })
  assignment!: Assignment;

  @ManyToOne({ entity: () => User })
  student!: User;

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
