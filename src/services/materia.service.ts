import { Materia } from "../models/materia.model";
import { Carrera } from "../models/carrera.model";
import { iMateria } from "../interfaces/materia.interface";


export const getAllMateriasService = async () => {
    
    const materia = await Materia.findAll({ include:Carrera });
    
    return materia;
};

export const getOneMateriaService = async (id:string) => {

    const materia = await Materia.findOne({ where: { id: id } });
    
    return materia;
};

export const createMateriaService = async (materia:iMateria) => {
    
    const dataNewMateria = await Materia.create(
    {
        nombre: materia.nombre,
        curso: materia.curso,
        carrera: materia.carreraId
    });

    return dataNewMateria;
};

export const updateMateriaService = async (id:string, materia:iMateria) => {

    const updatedMateria = await Materia.update(
        {
            nombre: materia.nombre,
            curso: materia.curso,
            carrera: materia.carreraId
        },
        {
         where: {id : id}
        });

    return updatedMateria;    
};


export const deleteMateriaService = async (id:string) => {

    const deletedMateria = await Materia.destroy({ where: { id: id } });

    return deletedMateria;
};