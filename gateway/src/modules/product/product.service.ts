import { Injectable } from "@nestjs/common";
import { ProductClient } from "./product.client";
import { CreateProductDto, UpdateProductDto } from "./dto";

@Injectable()
export class ProductService {
    constructor(private productClient: ProductClient){}

    createProduct(payload: CreateProductDto) {
        return this.productClient.createProduct(payload)
    }

    getAllProducts() {
        return this.productClient.getAllProducts()
    }

    getProduct(id: number) {
        return this.productClient.getProduct(id)
    }

    updateProduct(id: number, payload: UpdateProductDto) {
        return this.productClient.updateProduct(id, payload)
    }

    deleteProduct(id: number){
        return this.productClient.deleteProduct(id)
    }
}