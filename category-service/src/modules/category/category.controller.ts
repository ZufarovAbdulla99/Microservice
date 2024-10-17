import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DeleteCategoryDto, GetSingleCategoryDto } from './dto';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @MessagePattern('createCategory')
  create(@Payload() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @MessagePattern('getAllCategories')
  findAll() {
    return this.categoryService.findAll();
  }

  @MessagePattern("getSingleCategory")
  findOne(@Payload() payload: GetSingleCategoryDto) {
    return this.categoryService.findOne(payload.id);
  }

  @MessagePattern('updateCategory')
  update(@Payload() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(updateCategoryDto.id, updateCategoryDto);
  }

  @MessagePattern("deleteCategory")
  remove(@Payload() payload: DeleteCategoryDto) {
    return this.categoryService.remove(payload.id);
  }
}
