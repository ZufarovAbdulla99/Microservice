import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern("createProduct")
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @MessagePattern("getAllProducts")
  findAll() {
    return this.productService.findAll();
  }

  @MessagePattern("getProduct")
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @MessagePattern("updateProduct")
  update(@Param('id') id: number, @Payload() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @MessagePattern("deleteProduct")
  remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}
