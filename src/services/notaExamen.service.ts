import { Alumno } from "../models/alumno.model";
import { iNotaExamen } from "../interfaces/notaExamen.interface";
import { Asignatura } from "../models/asignatura.model";
import { NotaExamen } from "../models/notaExamen.model";


export const getAllNotasExamenService = async () => {
    
    try {
        const notasExamen= await NotaExamen.findAll({ include: [Alumno, Asignatura] }); 
        
        return notasExamen;
        
    } catch (error) {
        
        throw error;
    }
};

export const getOneNotaExamenService = async (id:string) => {

    try {
        const notaExamen = await NotaExamen.findOne({ include: [Alumno, Asignatura], where: { id: id } });
        
        return notaExamen;
        
    } catch (error) {
        
        throw error;
    }
    
};

export const createNotaExamenService = async (notaExamen:iNotaExamen) => {
    
    try {
        const dataNewNotaExamen = await NotaExamen.create(
        {
            alumnoId: notaExamen.alumnoId,
            asignaturaId: notaExamen.asignaturaId,
            primer_parcial: notaExamen.primer_parcial,
            segundo_parcial: notaExamen.segundo_parcial,
            final: notaExamen.final,
        });
    
        return dataNewNotaExamen;
        
    } catch (error) {
        
        throw error;
    }

};

export const updateNotaExamenService = async (id:string, notaExamen:iNotaExamen) => {

    try {
        const updatedNotaExamen = await NotaExamen.update(
        {
            alumnoId: notaExamen.alumnoId,
            asignaturaId: notaExamen.asignaturaId,
            primer_parcial: notaExamen.primer_parcial,
            segundo_parcial: notaExamen.segundo_parcial,
            final: notaExamen.final,
        },
        {
            where: {id : id}
        });
    
        return updatedNotaExamen;    
        
    } catch (error) {
        
        throw error;
    }

};


export const deleteNotaExamenService = async (id:string) => {

    try {
        const deletedNotaExamen = await NotaExamen.destroy({ where: { id: id } });
    
        return deletedNotaExamen;
        
    } catch (error) {
        
        throw error;
    }

};