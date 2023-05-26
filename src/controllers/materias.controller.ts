import { Request, Response } from "express";
import { getAllMateriasService,
        getOneMateriaService,
        createMateriaService,
        updateMateriaService,
        deleteMateriaService } from "../services/materia.service";

export const getAllMaterias = async (req:Request, res:Response) => {
    
    const response = await getAllMateriasService();
    
    res.json(response);
};

export const getOneMateria = async (req:Request, res:Response) => {
 
    const response = await getOneMateriaService(req.params.id);
    
    res.json(response);
};

export const createNewMateria = async (req:Request, res:Response) => {
    
    const response = await createMateriaService(req.body);
    
    res.json(response);
};

export const updateMateria = async (req:Request, res:Response) => {
    
    const response = await updateMateriaService( req.params.id, req.body );
    
    res.json(response);
};

export const deleteMateria = async (req:Request, res:Response) => {

    const response = await deleteMateriaService( req.params.id );

    res.json(response);
};