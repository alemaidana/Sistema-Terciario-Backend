import { Request, Response } from "express";
import { getAllAlumnosService,
         getOneAlumnoService,
         createAlumnoService,
         updateAlumnoService,
         deleteAlumnoService} from "../services/alumno.service";

export const getAllAlumnos = async (req:Request, res:Response) => {
    
    const response = await getAllAlumnosService();
    
    res.json(response);
};

export const getOneAlumno = async (req:Request, res:Response) => {
 
    const response = await getOneAlumnoService(req.params.id);
    
    res.json(response);
};

export const createNewAlumno = async (req:Request, res:Response) => {
    
    const response = await createAlumnoService(req.body);
    
    res.json(response);
};

export const updateAlumno = async (req:Request, res:Response) => {
    
    const response = await updateAlumnoService( req.params.id, req.body );
    
    res.json(response);
};

export const deleteAlumno = async (req:Request, res:Response) => {

    const response = await deleteAlumnoService( req.params.id );

    res.json(response);
};