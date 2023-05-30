import { RegistroDeExamen } from "../models/registroExamen.model";
import { iRegistroDeExamen } from "../interfaces/registroExamen.interface";
import { ExamenesFinales } from "../models/finalExamen.model";
import { Alumno } from "../models/alumno.model";


export const getAllRegistrosDeExamenService = async () => {
    
    try {
        const registrosDeExamenes = await RegistroDeExamen.findAll({ include: [Alumno, ExamenesFinales] }); 
        
        return registrosDeExamenes;
        
    } catch (error) {
        
        throw error;
    }

};

export const getOneRegistroDeExamenService = async (id:string) => {

    try {
        const registroDeExamen = await RegistroDeExamen.findOne({ include: [Alumno, ExamenesFinales], where: { id: id } });
        
        return registroDeExamen;
        
    } catch (error) {
        
        throw error;
    }

};

export const createRegistroDeExamenService = async (registrodeExamen:iRegistroDeExamen) => {
    
    try {
        const dataNewregistroDeExamen = await RegistroDeExamen.create(
        {
            alumnoId: registrodeExamen.alumnoId,
            finalExamId: registrodeExamen.finalExamId,
        });
    
        return dataNewregistroDeExamen;
        
    } catch (error) {
        
        throw error;
    }

};

export const updateRegistroDeExamenService = async (id:string, registrodeExamen:iRegistroDeExamen) => {

    try {
        const updatedRegistroDeExamen = await RegistroDeExamen.update(
        {
            alumnoId: registrodeExamen.alumnoId,
            finalExamId: registrodeExamen.finalExamId,
        },
        {
            where: {id : id}
        });
    
        return updatedRegistroDeExamen;    
        
    } catch (error) {
        
        throw error;
    }

};


export const deleteRegistroDeExamenService = async (id:string) => {

    try {
        const deletedRegistroDeExamen = await RegistroDeExamen.destroy({ where: { id: id } });
    
        return deletedRegistroDeExamen;
        
    } catch (error) {
        
        throw error;
    }

};