import { Request, Response } from "express";
import { getAllCarrerasService,
        getOneCarreraService,
        createCarreraService,
        updateCarreraService,
        deleteCarreraService } from "../services/carrera.service";
import { handleHttp } from "../shared/response/error.response";

export const getAllCarreras = async (req:Request, res:Response) => {
    
    try {
        const carreras = await getAllCarrerasService();
        
        res.status(200).json(carreras);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const getOneCarrera = async (req:Request, res:Response) => {
 
    try {
        const response = await getOneCarreraService(req.params.id);
        
        const carrera = response ? response : 'No Existe esa carrera';
        
        res.status(200).json(carrera); 
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const createNewCarrera = async (req:Request, res:Response) => {
    
    try {
        const carrera = await createCarreraService(req.body);
        
        res.status(201).json(carrera);    
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
    
};

export const updateCarrera = async (req:Request, res:Response) => {
    
    try {
        const carrera = await updateCarreraService( req.params.id, req.body );
        
        const updateSuccess = carrera[0] == 1 ? "Actualizacion con exito" : "No se pudo actualizar";
        
        res.status(200).json(updateSuccess);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
    
};

export const deleteCarrera = async (req:Request, res:Response) => {

    try {
        const carrera = await deleteCarreraService( req.params.id );
    
        res.status(204).json("Borrado Exitosamente");
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};