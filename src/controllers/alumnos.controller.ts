import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { Alumno } from "../models/alumno.model";
import jwt from 'jsonwebtoken'

export const newAlumno = async (req:Request, res:Response) => {
    
    const {nombre, apellido, email, telefono, password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const checkUser = await Alumno.findOne({where: {email:email}});

    if (checkUser) {
        
        return res.status(400).json({
            msg:`The user ${email} already exists`
        })
    }

    try {
        
        await Alumno.create({
            nombre: nombre,
            apellido:apellido,
            email:email,
            telefono:telefono,
            password: hashedPassword
        });
       
        res.json({
            message:`User ${email} created successfully`, 
        });

    } catch (error) {
        
        res.status(400).json({
            msg:'Could not create user',
            error: error,
        })
    }
}

export const login = async (req:Request, res:Response) => {

    const {email, password} = req.body;

    const checkUser:any = await Alumno.findOne({where: {email:email}});

    if (!checkUser) {
        
        return res.status(400).json({
            msg:`There is no email ${email}`
        })
    }

    const validPassword = await bcrypt.compare(password, checkUser.password);

    if (!validPassword) {
        
        return res.status(400).json({
            msg:`Invalid Password`
        })
    }

    const token = jwt.sign({email:email},process.env.SECRET_KEY || 'asshole');

    res.json(token);

}

export const getAlumnos = async (req:Request, res:Response) => {
    
    const alumnos = await Alumno.findAll();
    
    res.json(alumnos);
};