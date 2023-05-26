import { Asignatura } from "../models/asignatura.model";
import { iAsignatura } from "../interfaces/asignatura.interface";
import { Docente } from "../models/docente.model";
import { Materia } from "../models/materia.model";


export const getAllAsignaturasService = async () => {
    
    const asignturas = await Asignatura.findAll({ include: [Materia, Docente] });
    
    return asignturas;
};

export const getOneAsignaturaService = async (id:string) => {

    const asigntura = await Asignatura.findOne({ include: [Materia, Docente], where: { id: id } });
    
    return asigntura;
};

export const createAsignaturaService = async (asignatura:iAsignatura) => {
    
    const dataNewAsignatura = await Asignatura.create(
    {
        subjectId: asignatura.subjectId,
        docenteId: asignatura.docenteId,

    });

    return dataNewAsignatura;
};

export const updateAsignaturaService = async (id:string, asignatura:iAsignatura) => {

    const updatedAsignatura = await Asignatura.update(
        {
            subjectId: asignatura.subjectId,
            docenteId: asignatura.docenteId,
        },
        {
         where: {id : id}
        });

    return updatedAsignatura;    
};


export const deleteAsignaturaService = async (id:string) => {

    const deletedAsignatura = await Asignatura.destroy({ where: { id: id } });

    return deletedAsignatura;
};