import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) {}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryModel.create({
      name: createCategoryDto.name,
    });
  }

  async findAll() {
    return await this.categoryModel.findAll();
  }

  async findOne(id: number) {
    return await this.categoryModel.findByPk(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryModel.update(
      { name: updateCategoryDto.name },
      { where: { id } },
    );
  }

  async remove(id: number) {
    return await this.categoryModel.destroy({ where: { id } });
  }
}
