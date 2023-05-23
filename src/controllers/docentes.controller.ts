import { Request, Response } from "express";
import { Docente } from "../models/docente.model";

export const getDocentes = async (req:Request, res:Response) => {
    
    const docentes = await Docente.findAll();
    
    res.json(docentes);
};