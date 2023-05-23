import { Request, Response } from "express";
import { Alumno } from "../models/alumno.model";

export const getAlumnos = async (req:Request, res:Response) => {
    
    const alumnos = await Alumno.findAll();
    
    res.json(alumnos);
};