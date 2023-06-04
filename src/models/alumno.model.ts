import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { NotaExamen } from "./notaExamen.model";
import { RegistroDeExamen } from "./registroExamen.model";

export const Alumno = sequelize.define('alumno', {
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
    legajo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
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
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    f_nac: {
        type: DataTypes.DATE,
        allowNull: false
    },
    curso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    carreraId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
});

NotaExamen.belongsTo(Alumno);
RegistroDeExamen.belongsTo(Alumno);