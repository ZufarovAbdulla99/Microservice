import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'varchar', nullable: false})
    description: string;

    @Column({type: 'int'})
    price: number;

    @Column({type: 'int', default: 3})
    rating: number

    @Column({type: 'int'})
    count: number

    @Column({type: 'int', name: 'category_id'})
    category_id: number

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date
}
