import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "users", timestamps: true})
export class User extends Model {
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    phone: string;
}