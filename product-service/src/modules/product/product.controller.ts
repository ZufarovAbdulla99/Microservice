import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern("createProduct")
  async create(@Payload() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @MessagePattern("getAllProducts")
  async findAll() {
    return await this.productService.findAll();
  }

  @MessagePattern("getProduct")
  async findOne(@Payload() payload: {id: number}) {
    return await this.productService.findOne(payload.id);
  }

  @MessagePattern("updateProduct")
  async update(@Payload() updateProductDto: UpdateProductDto) {
    console.log(updateProductDto)
    return await this.productService.update(updateProductDto);
  }

  @MessagePattern("deleteProduct")
  async remove(@Payload() payload: {id: number}) {
    return await this.productService.remove(payload.id);
  }
}
