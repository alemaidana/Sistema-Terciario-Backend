import { Docente } from "../models/docente.model";
import { iDocente } from "../interfaces/docente.interface";
import bcrypt from 'bcrypt';

export const getAllDocentesService = async () => {
    
    const docentes = await Docente.findAll();
    
    return docentes;
};

export const getOneDocenteService = async (id:string) => {

    const docente = await Docente.findOne({ where: { id: id } });
    
    return docente;
};

export const createDocenteService = async (docente:iDocente) => {
    
    const hashedPassword = await bcrypt.hash(docente.password,10);

    const dataNewDocente = await Docente.create({
        nombre: docente.nombre,
        apellido: docente.apellido,
        email: docente.email,
        telefono: docente.telefono,
        password: hashedPassword,
    });

    return dataNewDocente;
};

export const updateDocenteService = async (id:string, docente:iDocente) => {

    const hashedPassword = await bcrypt.hash(docente.password,10);

    const updatedDocente = await Docente.update(
        {
            nombre: docente.nombre,
            apellido: docente.apellido,
            email: docente.email,
            telefono: docente.telefono,
            password: hashedPassword,
        },
        {
         where: {id : id}
        });

    return updatedDocente;    
};


export const deleteDocenteService = async (id:string) => {

    const deletedDocente = await Docente.destroy({ where: { id: id } });

    return deletedDocente;
};