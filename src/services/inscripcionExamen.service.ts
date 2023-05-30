import { ExamenesFinales } from "../models/finalExamen.model";
import { iExamenFinal } from "../interfaces/finalExamen.interface";
import { Asignatura } from "../models/asignatura.model";


export const getAllFinalExamsService = async () => {
    
    try {
        const examenesFinales = await ExamenesFinales.findAll({ include: Asignatura });
        
        return examenesFinales;
        
    } catch (error) {
        
        throw error;
    }

};

export const getOneFinalExamService = async (id:string) => {

    try {
        const examenFinal = await ExamenesFinales.findOne({ include: Asignatura, where: { id: id } });
        
        return examenFinal;
        
    } catch (error) {
        
        throw error;
    }

};

export const createFinalExamService = async (examenFinal:iExamenFinal) => {
    
    try {
        const dataNewExamenFinal = await ExamenesFinales.create(
        {
            asignaturaId: examenFinal.asignaturaId,
            primer_llamado: examenFinal.primerLLamado,
            segundo_llamado: examenFinal.segundoLLamado,
        });
    
        return dataNewExamenFinal;
        
    } catch (error) {
        
        throw error;
    }

};

export const updateFinalExamService = async (id:string, examenFinal:iExamenFinal) => {

    try {
        const updatedFinalExam = await ExamenesFinales.update(
         {
           asignaturaId: examenFinal.asignaturaId,
           primer_llamado: examenFinal.primerLLamado,
           segundo_llamado: examenFinal.segundoLLamado,
        },
        {
           where: {id : id}
        });
    
        return updatedFinalExam;    
        
    } catch (error) {
        
        throw error;
    }

};


export const deleteFinalExamService = async (id:string) => {

    try {
        const deletedFinalExam = await ExamenesFinales.destroy({ where: { id: id } });
    
        return deletedFinalExam;
        
    } catch (error) {
        
        throw error;
    }
};