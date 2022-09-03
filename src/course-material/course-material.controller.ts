import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseMaterialService } from './course-material.service';
import { CreateCourseMaterialDto } from './dto/create-course-material.dto';
import { UpdateCourseMaterialDto } from './dto/update-course-material.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('course-material')
export class CourseMaterialController {
  constructor(private readonly courseMaterialService: CourseMaterialService) {}

  @Post()
  create(@Body() createCourseMaterialDto: CreateCourseMaterialDto) {
    
    return this.courseMaterialService.create(createCourseMaterialDto);
  }

  @Get()
  findAll() {
    return this.courseMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: uuidv4) {
    return this.courseMaterialService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: uuidv4, @Body() updateCourseMaterialDto: UpdateCourseMaterialDto) {
    return this.courseMaterialService.update(id, updateCourseMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: uuidv4,@Body() updateCourseMaterialDto: UpdateCourseMaterialDto) {
    return this.courseMaterialService.remove(id,updateCourseMaterialDto);
  }
}
