import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const NotaExamen = sequelize.define('grade', {
    id: { type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    alumnoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    asignaturaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    primer_parcial: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    segundo_parcial: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    final: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false
});