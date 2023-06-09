import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Materia } from "./materia.model";
import { Alumno } from "./alumno.model";

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
Alumno.belongsTo(Carrera);
