import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto";

@ApiTags('Product')
@Controller('product')
export class ProductController {
    constructor(private service: ProductService){}

    @Post('/add')
    createCategory(@Body() payload: CreateProductDto) {
        return this.service.createProduct(payload)
    }

    @Get('/')
    getAllProducts(){
        return this.service.getAllProducts()
    }

    @Get('/:id') 
    getProduct(@Param('id', ParseIntPipe) id: number){
        return this.service.getProduct(id)
    }

    @Patch('/update')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() payload: CreateProductDto){
        return this.service.updateProduct(id, payload)
    }

    @Delete('/:id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.service.deleteProduct(id)
    }
}