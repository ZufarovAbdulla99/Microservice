import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto {
    @ApiProperty({
        type: String,
        description: "category nomi",
        example: "Kitoblar"
    })
    @IsOptional()
    @IsString()
    name?: string
}