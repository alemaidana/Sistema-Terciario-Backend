import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { ExamenesFinales } from "./finalExamen.model";
import { NotaExamen } from "./notaExamen.model";

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

ExamenesFinales.belongsTo(Asignatura);
NotaExamen.belongsTo(Asignatura);