import { Carrera } from "../models/carrera.model";
import { iCarrera } from "../interfaces/carrera.interface";


export const getAllCarrerasService = async () => {
    
    try {
        const carreras = await Carrera.findAll();
        
        return carreras;
        
    } catch (error) {
        
        throw error;
    }

};

export const getOneCarreraService = async (id:string) => {

    try {
        const carrera = await Carrera.findOne({ where: { id: id } });
        
        return carrera;
        
    } catch (error) {
        
        throw error;
    }
};

export const createCarreraService = async (carrera:iCarrera) => {
    
    try {
        const dataNewCarrera = await Carrera.create(
        {
            nombre: carrera.nombre,
        });
    
        return dataNewCarrera;
        
    } catch (error) {
        
        throw error;
    }
};

export const updateCarreraService = async (id:string, carrera:iCarrera) => {

    try {
        const updatedCarrera = await Carrera.update(
        {
           nombre: carrera.nombre,
        },
        {
           where: {id : id}
        });
    
        return updatedCarrera;    
        
    } catch (error) {
        
        throw error;
    }
};


export const deleteCarreraService = async (id:string) => {

    try {
        const deletedCarrera = await Carrera.destroy({ where: { id: id } });
    
        return deletedCarrera;
        
    } catch (error) {
        
        throw error;
    }
};