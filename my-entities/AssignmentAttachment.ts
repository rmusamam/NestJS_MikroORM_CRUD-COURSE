import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Assignment } from './Assignment';

@Entity()
export class AssignmentAttachment {

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

  @ManyToOne({ entity: () => Assignment })
  assignment!: Assignment;

}
