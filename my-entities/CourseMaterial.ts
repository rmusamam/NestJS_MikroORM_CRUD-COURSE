import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Course } from './Course';
import { Folder } from './Folder';

@Entity()
export class CourseMaterial {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'uuid' })
  uuid!: string;

  @Property({ columnType: 'text' })
  description!: string;

  @ManyToOne({ entity: () => Course })
  course!: Course;

  @ManyToOne({ entity: () => Folder })
  folder!: Folder;

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
