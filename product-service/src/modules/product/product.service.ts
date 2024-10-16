import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productEntity: Repository<Product>){}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productEntity.create({
      name: createProductDto.name,
      category_id: createProductDto.category_id
    })
    await this.productEntity.save(newProduct)
    return newProduct ;
  }

  async findAll(): Promise<Product[]> {
    return await this.productEntity.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productEntity.findOneBy({id});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productEntity.update({id}, {
      name: updateProductDto.name,
      category_id: updateProductDto.category_id
    })
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    await this.productEntity.delete({id})
    return `This action removes a #${id} product`;
  }
}
