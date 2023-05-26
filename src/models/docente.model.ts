import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Asignatura } from "./asignatura.model";

export const Docente = sequelize.define('docente', {
    id: { type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
});

Asignatura.belongsTo(Docente);