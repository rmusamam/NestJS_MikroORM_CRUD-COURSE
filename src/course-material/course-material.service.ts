import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateCourseMaterialDto } from './dto/create-course-material.dto';
import { UpdateCourseMaterialDto } from './dto/update-course-material.dto';
import { CourseMaterial } from './entities/course-material.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CourseMaterialService {

  constructor(
    @InjectRepository(CourseMaterial)
    private courseMaterialRepository: EntityRepository<CourseMaterial>,
  ) {}

  async create(createCourseMaterialDto: CreateCourseMaterialDto) {

    createCourseMaterialDto.uuid=uuidv4()
    createCourseMaterialDto.createdAt=new Date()
    createCourseMaterialDto.updatedAt=new Date()
    createCourseMaterialDto.deletedAt=new Date()

    console.log(createCourseMaterialDto.createdAt);
    
      const course = this.courseMaterialRepository.create(createCourseMaterialDto);
      await this.courseMaterialRepository.persist(course).flush();


    // return 'This action adds a new courseMaterial';

    return course;
  }

  async findAll() {
    return await this.courseMaterialRepository.findAll();
  }

   async findOne(id: uuidv4) {
    console.log('this is uuid : ',id)
    const search=await this.courseMaterialRepository.findOneOrFail({uuid:id});
    console.log(search);
    
    return `This action returns a #${search} course`;
  }

  async update(id: uuidv4, updateCourseMaterialDto: UpdateCourseMaterialDto) {


    updateCourseMaterialDto.updatedAt= new Date()
    console.log(updateCourseMaterialDto)
    const findCourse = await this.courseMaterialRepository.findOne({uuid:id});

    wrap(findCourse).assign(updateCourseMaterialDto);
    console.log('this is find Query :',findCourse)

    await this.courseMaterialRepository.persist(findCourse).flush();

    return `This action updates a #${findCourse} course`;



    // return `This action updates a #${id} courseMaterial`;
  }

  async remove(id: uuidv4) {




    // updateCourseMaterialDto.updatedAt= new Date()
    // console.log(updateCourseMaterialDto)
    const findCourse = await this.courseMaterialRepository.findOne({uuid:id});

    // wrap(findCourse).assign(updateCourseMaterialDto);
    findCourse.recordStatus=false
    console.log('this is find Query :',findCourse)

    await this.courseMaterialRepository.persist(findCourse).flush();

    return `This action updates a #${findCourse} course`;



  }
}
