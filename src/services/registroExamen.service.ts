import { RegistroDeExamen } from "../models/registroExamen.model";
import { iRegistroDeExamen } from "../interfaces/registroExamen.interface";
import { ExamenesFinales } from "../models/finalExamen.model";
import { Alumno } from "../models/alumno.model";


export const getAllRegistrosDeExamenService = async () => {
    
    const registrosDeExamenes = await RegistroDeExamen.findAll({ include: [Alumno, ExamenesFinales] }); 
    
    return registrosDeExamenes;
};

export const getOneRegistroDeExamenService = async (id:string) => {

    const registroDeExamen = await RegistroDeExamen.findOne({ include: [Alumno, ExamenesFinales], where: { id: id } });
    
    return registroDeExamen;
};

export const createRegistroDeExamenService = async (registrodeExamen:iRegistroDeExamen) => {
    
    const dataNewregistroDeExamen = await RegistroDeExamen.create(
    {
        alumnoId: registrodeExamen.alumnoId,
        finalExamId: registrodeExamen.finalExamId,
    });

    return dataNewregistroDeExamen;
};

export const updateRegistroDeExamenService = async (id:string, registrodeExamen:iRegistroDeExamen) => {

    const updatedRegistroDeExamen = await RegistroDeExamen.update(
        {
            alumnoId: registrodeExamen.alumnoId,
            finalExamId: registrodeExamen.finalExamId,
        },
        {
         where: {id : id}
        });

    return updatedRegistroDeExamen;    
};


export const deleteRegistroDeExamenService = async (id:string) => {

    const deletedRegistroDeExamen = await RegistroDeExamen.destroy({ where: { id: id } });

    return deletedRegistroDeExamen;
};