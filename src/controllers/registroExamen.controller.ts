import { Request, Response } from "express";
import { getAllRegistrosDeExamenService,
        getOneRegistroDeExamenService,
        createRegistroDeExamenService,
        updateRegistroDeExamenService,
        deleteRegistroDeExamenService } from "../services/registroExamen.service";

export const getAllRegistrosDeExamen = async (req:Request, res:Response) => {
    
    const response = await getAllRegistrosDeExamenService();
    
    res.json(response);
};

export const getOneRegistroDeExamen = async (req:Request, res:Response) => {
 
    const response = await getOneRegistroDeExamenService(req.params.id);
    
    res.json(response);
};

export const createNewRegistroDeExamen = async (req:Request, res:Response) => {
    
    const response = await createRegistroDeExamenService(req.body);
    
    res.json(response);
};

export const updateRegistroDeExamen = async (req:Request, res:Response) => {
    
    const response = await updateRegistroDeExamenService( req.params.id, req.body );
    
    res.json(response);
};

export const deleteRegistroDeExamen = async (req:Request, res:Response) => {

    const response = await deleteRegistroDeExamenService( req.params.id );

    res.json(response);
};