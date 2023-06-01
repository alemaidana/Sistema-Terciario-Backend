import { Request, Response } from "express";
import { getAllNotasExamenService,
        getOneNotaExamenService,
        createNotaExamenService,
        updateNotaExamenService,
        deleteNotaExamenService } from "../services/notaExamen.service";
import { handleHttp } from "../shared/response/error.response";

export const getAllNotasExamen = async (req:Request, res:Response) => {
    
    try {
        const notas = await getAllNotasExamenService();
        
        res.status(200).json(notas);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const getOneNotaExamen = async (req:Request, res:Response) => {
 
    try {
        const response = await getOneNotaExamenService(req.params.id);
        
        const nota = response ? response : 'No Existe la nota';
        
        res.status(200).json(nota); 
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const createNewNotaExamen = async (req:Request, res:Response) => {
    
    try {
        const nota = await createNotaExamenService(req.body);
        
        res.status(201).json(nota);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};

export const updateNotaExamen = async (req:Request, res:Response) => {
    
    try {
        const nota = await updateNotaExamenService( req.params.id, req.body );
        
        const updateSuccess = nota[0] == 1 ? "Actualizacion con exito" : "No se pudo actualizar";
        
        res.status(200).json(updateSuccess);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};

export const deleteNotaExamen = async (req:Request, res:Response) => {

    try {
        const nota = await deleteNotaExamenService( req.params.id );
    
        res.status(204).json("Borrado Exitosamente");
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};