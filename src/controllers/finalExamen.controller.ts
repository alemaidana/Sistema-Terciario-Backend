import { Request, Response } from "express";
import { getAllFinalExamsService,
        getOneFinalExamService,
        createFinalExamService,
        updateFinalExamService,
        deleteFinalExamService } from "../services/inscripcionExamen.service";

export const getAllFinalExams = async (req:Request, res:Response) => {
    
    const response = await getAllFinalExamsService();
    
    res.json(response);
};

export const getOneFinalExam = async (req:Request, res:Response) => {
 
    const response = await getOneFinalExamService(req.params.id);
    
    res.json(response);
};

export const createNewFinalExam = async (req:Request, res:Response) => {
    
    const response = await createFinalExamService(req.body);
    
    res.json(response);
};

export const updateFinalExam = async (req:Request, res:Response) => {
    
    const response = await updateFinalExamService( req.params.id, req.body );
    
    res.json(response);
};

export const deleteFinalExam = async (req:Request, res:Response) => {

    const response = await deleteFinalExamService( req.params.id );

    res.json(response);
};