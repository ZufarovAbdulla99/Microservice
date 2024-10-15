import { DataTypes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "categories", timestamps: true})
export class Category extends Model {
    @Column({type: DataTypes.TEXT, allowNull: false})
    name: string;
}