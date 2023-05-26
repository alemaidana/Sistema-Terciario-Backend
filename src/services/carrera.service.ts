import { Carrera } from "../models/carrera.model";
import { iCarrera } from "../interfaces/carrera.interface";


export const getAllCarrerasService = async () => {
    
    const carreras = await Carrera.findAll();
    
    return carreras;
};

export const getOneCarreraService = async (id:string) => {

    const carrera = await Carrera.findOne({ where: { id: id } });
    
    return carrera;
};

export const createCarreraService = async (carrera:iCarrera) => {
    
    const dataNewCarrera = await Carrera.create(
    {
        nombre: carrera.nombre,
    });

    return dataNewCarrera;
};

export const updateCarreraService = async (id:string, carrera:iCarrera) => {

    const updatedCarrera = await Carrera.update(
        {
            nombre: carrera.nombre,
        },
        {
         where: {id : id}
        });

    return updatedCarrera;    
};


export const deleteCarreraService = async (id:string) => {

    const deletedCarrera = await Carrera.destroy({ where: { id: id } });

    return deletedCarrera;
};