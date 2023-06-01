import { Request, Response } from "express";
import { getAllMateriasService,
        getOneMateriaService,
        createMateriaService,
        updateMateriaService,
        deleteMateriaService } from "../services/materia.service";
import { handleHttp } from "../shared/response/error.response";

export const getAllMaterias = async (req:Request, res:Response) => {
    
    try {
        const materias = await getAllMateriasService();
        
        res.status(200).json(materias);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
    
};

export const getOneMateria = async (req:Request, res:Response) => {
 
    try {
        const response = await getOneMateriaService(req.params.id);
        
        const materia = response ? response : 'No Existe la materia';
        
        res.status(200).json(materia);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};

export const createNewMateria = async (req:Request, res:Response) => {
    
    try {
        const materia = await createMateriaService(req.body);
        
        res.status(201).json(materia);
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }

};

export const updateMateria = async (req:Request, res:Response) => {
    
    try {
        const materia = await updateMateriaService( req.params.id, req.body );
        
        const updateSuccess = materia[0] == 1 ? "Actualizacion con exito" : "No se pudo actualizar";
        
        res.status(200).json(updateSuccess);
        
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};

export const deleteMateria = async (req:Request, res:Response) => {

    try {
        const materia = await deleteMateriaService( req.params.id );
    
        res.status(204).json("Borrado Exitosamente");
        
    } catch (error) {
        
        handleHttp(res, 'FAILED', error);
    }
};