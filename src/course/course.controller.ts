import { InjectRepository } from '@mikro-orm/nestjs';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { v4 as uuidv4 } from 'uuid';


// import { Repository } from 'mikro-orm';


@Controller('course')
export class CourseController {
  constructor(
    private readonly courseService: CourseService
  ) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll() {


    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:number ) {
    return this.courseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: uuidv4, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: uuidv4) {
    return this.courseService.remove(id);
  }
}
