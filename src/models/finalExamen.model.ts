import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { RegistroDeExamen } from "./registroExamen.model";

export const ExamenesFinales = sequelize.define('final', {
    id: { type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    asignaturaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    primer_llamado: {
        type: DataTypes.DATE,
        allowNull: false
    },
    segundo_llamado: {
        type: DataTypes.DATE,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false
});

RegistroDeExamen.belongsTo(ExamenesFinales);
