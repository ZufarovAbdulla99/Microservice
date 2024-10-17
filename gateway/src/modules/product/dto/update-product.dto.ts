import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty({
    type: 'string',
    description: 'Product nomi',
    example: 'Samsung S24',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'Product tavsifi',
    example: 'Bu juda yaxshi mahsulot',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: 'number',
    description: 'Product narxi',
    example: 1000,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    type: 'number',
    description: 'Product soni',
    example: 30,
  })
  @IsNumber()
  @IsPositive()
  count: number;

  @ApiProperty({
    type: 'number',
    description: 'Product reytingi 1 dan 5 gacha kiritiladi',
    example: 3,
  })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}
