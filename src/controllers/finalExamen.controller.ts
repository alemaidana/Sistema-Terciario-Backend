import { Request, Response } from "express";
import { getAllFinalExamsService,
        getOneFinalExamService,
        createFinalExamService,
        updateFinalExamService,
        deleteFinalExamService } from "../services/inscripcionExamen.service";
import { handleHttp } from "../shared/response/error.response";

export const getAllFinalExams = async (req:Request, res:Response) => {
    
    try {
        const finales = await getAllFinalExamsService();
        
        res.status(200).json(finales);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const getOneFinalExam = async (req:Request, res:Response) => {
 
    try {
        const response = await getOneFinalExamService(req.params.id);
        
        const final = response ? response : 'No Existe el final';
        
        res.status(200).json(final);  
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const createNewFinalExam = async (req:Request, res:Response) => {
    
    try {
        const final = await createFinalExamService(req.body);
        
        res.status(201).json(final);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const updateFinalExam = async (req:Request, res:Response) => {
    
    try {
        const final = await updateFinalExamService( req.params.id, req.body );
        
        const updateSuccess = final[0] == 1 ? "Actualizacion con exito" : "No se pudo actualizar";
        
        res.status(200).json(updateSuccess);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};

export const deleteFinalExam = async (req:Request, res:Response) => {

    try {
        const final = await deleteFinalExamService( req.params.id );
    
        res.status(204).json("Borrado Exitosamente");
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};