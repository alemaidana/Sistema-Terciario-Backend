import { Request, Response } from "express";
import { getAllAsignaturasService,
        getOneAsignaturaService,
        createAsignaturaService,
        updateAsignaturaService,
        deleteAsignaturaService } from "../services/asignatura.service";

export const getAllAsignaturas = async (req:Request, res:Response) => {
    
    const response = await getAllAsignaturasService();
    
    res.json(response);
};

export const getOneAsignatura = async (req:Request, res:Response) => {
 
    const response = await getOneAsignaturaService(req.params.id);
    
    res.json(response);
};

export const createNewAsignatura = async (req:Request, res:Response) => {
    
    const response = await createAsignaturaService(req.body);
    
    res.json(response);
};

export const updateAsignatura = async (req:Request, res:Response) => {
    
    const response = await updateAsignaturaService( req.params.id, req.body );
    
    res.json(response);
};

export const deleteAsignatura = async (req:Request, res:Response) => {

    const response = await deleteAsignaturaService( req.params.id );

    res.json(response);
};