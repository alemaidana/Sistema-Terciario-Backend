import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Product = sequelize.define('producto', {
    name:{ type: DataTypes.STRING},
    description:{type: DataTypes.STRING},
    price:{type: DataTypes.DOUBLE},
    stock:{type: DataTypes.INTEGER},
},{
    createdAt: false,
    updatedAt: false
});