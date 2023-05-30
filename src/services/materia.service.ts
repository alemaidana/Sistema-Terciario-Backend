import { Materia } from "../models/materia.model";
import { Carrera } from "../models/carrera.model";
import { iMateria } from "../interfaces/materia.interface";


export const getAllMateriasService = async () => {
    
    try {
        const materias = await Materia.findAll({ include:Carrera });
        
        return materias;
        
    } catch (error) {
        
        throw error;
    }

};

export const getOneMateriaService = async (id:string) => {

    try {
        const materia = await Materia.findOne({ where: { id: id } });
        
        return materia;
        
    } catch (error) {
        
        throw error;
    }

};

export const createMateriaService = async (materia:iMateria) => {
    
    try {
        const dataNewMateria = await Materia.create(
        {
            nombre: materia.nombre,
            curso: materia.curso,
            carrera: materia.carreraId
        });
    
        return dataNewMateria;
        
    } catch (error) {
        
        throw error;
    }

};

export const updateMateriaService = async (id:string, materia:iMateria) => {

    try {
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
        
    } catch (error) {
        
        throw error;
    }

};


export const deleteMateriaService = async (id:string) => {

    try {
        const deletedMateria = await Materia.destroy({ where: { id: id } });
    
        return deletedMateria;
        
    } catch (error) {
        
        throw error;
    }

};