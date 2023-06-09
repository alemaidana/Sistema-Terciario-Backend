import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Asignatura } from "./asignatura.model";

export const Materia = sequelize.define('subject', {
    id: { type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    curso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    carreraId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
});

Asignatura.belongsTo(Materia);