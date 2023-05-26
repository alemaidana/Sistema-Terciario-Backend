import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Materia } from "./materia.model";

export const Carrera = sequelize.define('carrera', {
    id: { type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false
});

Materia.belongsTo(Carrera);
