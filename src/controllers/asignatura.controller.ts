import { Request, Response } from "express";
import { getAllAsignaturasService,
        getOneAsignaturaService,
        createAsignaturaService,
        updateAsignaturaService,
        deleteAsignaturaService } from "../services/asignatura.service";
import { handleHttp } from "../shared/response/error.response";

export const getAllAsignaturas = async (req:Request, res:Response) => {
    
    try {
        const asignaturas = await getAllAsignaturasService();
        
        res.status(200).json(asignaturas);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const getOneAsignatura = async (req:Request, res:Response) => {
 
    try {
        const response = await getOneAsignaturaService(req.params.id);
        
        const asignatura = response ? response : 'No Existe la asignatura';

        res.status(200).json(asignatura);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const createNewAsignatura = async (req:Request, res:Response) => {
    
    try {
        const asignatura = await createAsignaturaService(req.body);
        
        res.status(201).json(asignatura);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const updateAsignatura = async (req:Request, res:Response) => {
    
    try {
        const asignatura = await updateAsignaturaService( req.params.id, req.body );
        
        const updateSuccess = asignatura[0] == 1 ? "Actualizacion con exito" : "No se pudo actualizar";
        
        res.status(200).json(updateSuccess);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const deleteAsignatura = async (req:Request, res:Response) => {

    try {
        const asignatura = await deleteAsignaturaService( req.params.id );
    
        res.status(204).json("Borrado Exitosamente");
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }    
};