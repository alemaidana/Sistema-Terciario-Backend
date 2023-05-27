import { Alumno } from "../models/alumno.model";
import { iNotaExamen } from "../interfaces/notaExamen.interface";
import { Asignatura } from "../models/asignatura.model";
import { NotaExamen } from "../models/notaExamen.model";


export const getAllNotasExamenService = async () => {
    
    const notasExamen= await NotaExamen.findAll({ include: [Alumno, Asignatura] }); 
    
    return notasExamen;
};

export const getOneNotaExamenService = async (id:string) => {

    const notaExamen = await NotaExamen.findOne({ include: [Alumno, Asignatura], where: { id: id } });
    
    return notaExamen;
};

export const createNotaExamenService = async (notaExamen:iNotaExamen) => {
    
    const dataNewNotaExamen = await NotaExamen.create(
    {
        alumnoId: notaExamen.alumnoId,
        asignaturaId: notaExamen.asignaturaId,
        primer_parcial: notaExamen.primer_parcial,
        segundo_parcial: notaExamen.segundo_parcial,
        final: notaExamen.final,
    });

    return dataNewNotaExamen;
};

export const updateNotaExamenService = async (id:string, notaExamen:iNotaExamen) => {

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
};


export const deleteNotaExamenService = async (id:string) => {

    const deletedNotaExamen = await NotaExamen.destroy({ where: { id: id } });

    return deletedNotaExamen;
};