import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { AssignmentSubmission } from './AssignmentSubmission';

@Entity()
export class SubmissionAttachment {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'uuid' })
  uuid!: string;

  @Property({ columnType: 'text' })
  fileName!: string;

  @Property({ columnType: 'text' })
  filePath!: string;

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

  @ManyToOne({ entity: () => AssignmentSubmission })
  assignmentSubmission!: AssignmentSubmission;

}
