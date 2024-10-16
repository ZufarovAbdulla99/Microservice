import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductClient } from "./product.client";
import { ProductController } from "./product.controller";

@Module({
    imports: [],
    providers: [ProductService, ProductClient],
    controllers: [ProductController]
})
export class ProductModule{}