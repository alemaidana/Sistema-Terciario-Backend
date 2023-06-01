import { Request, Response } from "express";
import { getAllRegistrosDeExamenService,
        getOneRegistroDeExamenService,
        createRegistroDeExamenService,
        updateRegistroDeExamenService,
        deleteRegistroDeExamenService } from "../services/registroExamen.service";
import { handleHttp } from "../shared/response/error.response";

export const getAllRegistrosDeExamen = async (req:Request, res:Response) => {
    
    try {
        const examenes = await getAllRegistrosDeExamenService();
        
        res.status(200).json(examenes);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};

export const getOneRegistroDeExamen = async (req:Request, res:Response) => {
 
    try {
        const response = await getOneRegistroDeExamenService(req.params.id);
        
        const examen = response ? response : 'No Existe el examen';
        
        res.status(200).json(examen); 
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};

export const createNewRegistroDeExamen = async (req:Request, res:Response) => {
    
    try {
        const examen = await createRegistroDeExamenService(req.body);
        
        res.status(201).json(examen);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const updateRegistroDeExamen = async (req:Request, res:Response) => {
    
    try {
        const examen = await updateRegistroDeExamenService( req.params.id, req.body );
        
        const updateSuccess = examen[0] == 1 ? "Actualizacion con exito" : "No se pudo actualizar";
        
        res.status(200).json(updateSuccess);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const deleteRegistroDeExamen = async (req:Request, res:Response) => {

    try {
        const examen = await deleteRegistroDeExamenService( req.params.id );
    
        res.status(204).json("Borrado Exitosamente");
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};