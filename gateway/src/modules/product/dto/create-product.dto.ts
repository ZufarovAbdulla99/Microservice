import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({
        type: "string",
        description: "product nomi",
        example: "Redmi 9"
    })
    name: string;

    @ApiProperty({
        type: Number,
        description: "qaysi categoryga tegishli idsi",
        example: "Telefonlar"
    })
    category_id: number
}