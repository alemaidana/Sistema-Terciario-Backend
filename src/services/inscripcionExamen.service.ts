import { ExamenesFinales } from "../models/finalExamen.model";
import { iExamenFinal } from "../interfaces/finalExamen.interface";
import { Asignatura } from "../models/asignatura.model";


export const getAllFinalExamsService = async () => {
    
    const examenesFinales = await ExamenesFinales.findAll({ include: Asignatura });
    
    return examenesFinales;
};

export const getOneFinalExamService = async (id:string) => {

    const examenFinal = await ExamenesFinales.findOne({ include: Asignatura, where: { id: id } });
    
    return examenFinal;
};

export const createFinalExamService = async (examenFinal:iExamenFinal) => {
    
    const dataNewExamenFinal = await ExamenesFinales.create(
    {
        asignaturaId: examenFinal.asignaturaId,
        primer_llamado: examenFinal.primerLLamado,
        segundo_llamado: examenFinal.segundoLLamado,
    });

    return dataNewExamenFinal;
};

export const updateFinalExamService = async (id:string, examenFinal:iExamenFinal) => {

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
};


export const deleteFinalExamService = async (id:string) => {

    const deletedFinalExam = await ExamenesFinales.destroy({ where: { id: id } });

    return deletedFinalExam;
};