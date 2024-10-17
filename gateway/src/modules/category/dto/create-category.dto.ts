import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({
        type: String,
        description: "category nomi",
        example: "Kitoblar"
    })
    @IsNotEmpty()
    @IsString()
    name: string
}