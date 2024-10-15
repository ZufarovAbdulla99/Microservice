import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto } from "./dto";

@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(private service: CategoryService){}

    @Get()
    getCategories(){
        return this.service.getCategoryList()
    }

    @Post('/add')
    createCategory(@Body() payload: CreateCategoryDto) {
        return this.service.createCategory(payload.name)
    }

    @Delete('/:id')
    deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return this.service.deleteCategory(id)
    }
}