import { Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { CreateProductDto, UpdateProductDto } from "./dto";

@Injectable()
export class ProductClient implements OnModuleInit {
    private client: ClientProxy

    constructor() {
        this.client = ClientProxyFactory.create({
            options: {
                port: 3002,
                host: "localhost",
            },
            transport: Transport.TCP
        })
    }

    async onModuleInit() {
        await this.client.connect()
    }

    createProduct(payload: CreateProductDto) {
        return this.client.send("createProduct", payload)
    }

    getAllProducts() {
        return this.client.send("getAllProducts", "")
    }

    getProduct(id: number) {
        return this.client.send("getProduct", {id})
    }

    updateProduct(id: number, payload: UpdateProductDto){
        return this.client.send("updateProduct", {id, payload})
    }

    deleteProduct(id: number){
        return this.client.send("deleteProduct", {id})
    }
}