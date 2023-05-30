import { Asignatura } from "../models/asignatura.model";
import { iAsignatura } from "../interfaces/asignatura.interface";
import { Docente } from "../models/docente.model";
import { Materia } from "../models/materia.model";


export const getAllAsignaturasService = async () => {
    
    try {
        const asignaturas = await Asignatura.findAll({ include: [Materia, Docente] });
        
        return asignaturas;
        
    } catch (error) {
        
        throw error;
    }

};

export const getOneAsignaturaService = async (id:string) => {

    try {
        const asignatura = await Asignatura.findOne({ include: [Materia, Docente], where: { id: id } });
        
        return asignatura;
        
    } catch (error) {
        
        throw error;
    }
};

export const createAsignaturaService = async (asignatura:iAsignatura) => {
    
    try {
        const dataNewAsignatura = await Asignatura.create(
        {
            subjectId: asignatura.subjectId,
            docenteId: asignatura.docenteId,
    
        });
    
        return dataNewAsignatura;
        
    } catch (error) {
        
        throw error;
    }

};

export const updateAsignaturaService = async (id:string, asignatura:iAsignatura) => {

    try {
        const updatedAsignatura = await Asignatura.update(
        {
            subjectId: asignatura.subjectId,
            docenteId: asignatura.docenteId,
        },
        {
            where: {id : id}
        });
    
        return updatedAsignatura;    
        
    } catch (error) {
        
        throw error;
    }

};


export const deleteAsignaturaService = async (id:string) => {

    try {
        const deletedAsignatura = await Asignatura.destroy({ where: { id: id } });
    
        return deletedAsignatura;
        
    } catch (error) {
        
        throw error;
    }

};