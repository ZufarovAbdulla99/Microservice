import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'int', nullable: true})
    category_id: number
}
