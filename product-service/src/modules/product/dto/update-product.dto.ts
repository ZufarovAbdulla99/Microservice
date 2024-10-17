import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsNumberString, IsPositive } from 'class-validator';

export class UpdateProductDto extends OmitType(PartialType(CreateProductDto), ["category_id"]){
    @IsNumberString()
    @IsPositive()
    id: number;
}
