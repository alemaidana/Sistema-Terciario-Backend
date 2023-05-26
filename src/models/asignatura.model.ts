import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Asignatura = sequelize.define('asignatura', {
    id: { type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    docenteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false
});
