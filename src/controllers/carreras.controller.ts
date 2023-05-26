import { Request, Response } from "express";
import { getAllCarrerasService,
        getOneCarreraService,
        createCarreraService,
        updateCarreraService,
        deleteCarreraService } from "../services/carrera.service";

export const getAllCarreras = async (req:Request, res:Response) => {
    
    const response = await getAllCarrerasService();
    
    res.json(response);
};

export const getOneCarrera = async (req:Request, res:Response) => {
 
    const response = await getOneCarreraService(req.params.id);
    
    res.json(response);
};

export const createNewCarrera = async (req:Request, res:Response) => {
    
    const response = await createCarreraService(req.body);
    
    res.json(response);
};

export const updateCarrera = async (req:Request, res:Response) => {
    
    const response = await updateCarreraService( req.params.id, req.body );
    
    res.json(response);
};

export const deleteCarrera = async (req:Request, res:Response) => {

    const response = await deleteCarreraService( req.params.id );

    res.json(response);
};