import { Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { CreateCategoryDto } from "./dto";
import { identity } from "rxjs";

@Injectable()
export class CategoryClient implements OnModuleInit {
    private client: ClientProxy

    constructor() {
        this.client = ClientProxyFactory.create({
            options: {
                port: 3001,
                host: "localhost",
            },
            transport: Transport.TCP
        })
    }

    async onModuleInit() {
        await this.client.connect()
    }

    getAllCategories() {
        return this.client.send("getAllCategories", "")
    }

    getSingleCategory(id: number) {
        return this.client.send('getSingleCategory', {id})
    }

    updateCategory(payload: {id: number, name?: string}) {
        return this.client.send('updateCategory', payload)
    }

    createCategory(name: string) {
        return this.client.send("createCategory", {name})
    }

    deleteCategory(id: number){
        return this.client.send("deleteCategory", {id})
    }
}