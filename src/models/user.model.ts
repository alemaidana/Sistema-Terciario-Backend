import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username:{ type: DataTypes.STRING},
    password:{type: DataTypes.STRING},
},{
    createdAt: false,
    updatedAt: false
});