import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { ExamenesFinales } from "./finalExamen.model";


export const RegistroDeExamen = sequelize.define('exam', {
    id: { type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    alumnoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    finalId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false
});

