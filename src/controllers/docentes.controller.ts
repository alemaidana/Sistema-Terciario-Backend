import { Request, Response } from "express";
import { getAllDocentesService,
         getOneDocenteService,
         createDocenteService,
         updateDocenteService,
         deleteDocenteService} from "../services/docentes.service";

export const getAllDocentes = async (req:Request, res:Response) => {
    
    const response = await getAllDocentesService();
    
    res.json(response);
};

export const getOneDocente = async (req:Request, res:Response) => {
 
    const response = await getOneDocenteService(req.params.id);
    
    res.json(response);
};

export const createNewDocente = async (req:Request, res:Response) => {
    
    const response = await createDocenteService(req.body);
    
    res.json(response);
};

export const updateDocente = async (req:Request, res:Response) => {
    
    const response = await updateDocenteService( req.params.id, req.body );
    
    res.json(response);
};

export const deleteDocente = async (req:Request, res:Response) => {

    const response = await deleteDocenteService( req.params.id );

    res.json(response);
};