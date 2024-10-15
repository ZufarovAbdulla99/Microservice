import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({
        type: String,
        description: "category nomi",
        example: "Kitoblar"
    })
    name: string
}