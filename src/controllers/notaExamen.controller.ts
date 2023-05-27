import { Request, Response } from "express";
import { getAllNotasExamenService,
        getOneNotaExamenService,
        createNotaExamenService,
        updateNotaExamenService,
        deleteNotaExamenService } from "../services/notaExamen.service";

export const getAllNotasExamen = async (req:Request, res:Response) => {
    
    const response = await getAllNotasExamenService();
    
    res.json(response);
};

export const getOneNotaExamen = async (req:Request, res:Response) => {
 
    const response = await getOneNotaExamenService(req.params.id);
    
    res.json(response);
};

export const createNewNotaExamen = async (req:Request, res:Response) => {
    
    const response = await createNotaExamenService(req.body);
    
    res.json(response);
};

export const updateNotaExamen = async (req:Request, res:Response) => {
    
    const response = await updateNotaExamenService( req.params.id, req.body );
    
    res.json(response);
};

export const deleteNotaExamen = async (req:Request, res:Response) => {

    const response = await deleteNotaExamenService( req.params.id );

    res.json(response);
};