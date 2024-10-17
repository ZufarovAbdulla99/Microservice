import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productEntity: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productEntity.create({
      name: createProductDto.name,
      description: createProductDto.description,
      price: createProductDto.price,
      count: createProductDto.count,
      rating: createProductDto.rating,
      category_id: createProductDto.category_id,
    });

    await this.productEntity.save(newProduct);

    return newProduct;
  }

  async findAll(): Promise<Product[]> {
    return await this.productEntity.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.productEntity.findOne({ where: { id } });
  }

  async update(updateProductDto: UpdateProductDto) {
    const foundedProduct = await this.productEntity.findOne({
      where: { id: updateProductDto.id },
    });

    if (!foundedProduct) {
      throw new NotFoundException('Product not found');
    }
    return await this.productEntity.update(
      { id: updateProductDto.id },
      {
        name: updateProductDto?.name,
        description: updateProductDto?.description,
        price: updateProductDto?.price,
        count: updateProductDto?.count,
        rating: updateProductDto?.rating,
      },
    );
  }

  async remove(id: number) {
    await this.productEntity.delete({ id });
    return `This action removes a #${id} product`;
  }
}
