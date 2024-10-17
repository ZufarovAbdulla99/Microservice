import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto";

@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(private service: CategoryService){}

    @Get()
    getCategories(){
        return this.service.getCategoryList()
    }

    @Get('/:id')
    getSingleCategory(@Param('id', ParseIntPipe) id: number){
        return this.service.getSingleCategory(id)
    }

    @Patch('/:id')
    updateCategory(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryDto) {
        return this.service.updateCategory({...payload, id})
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