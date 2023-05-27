import { Alumno } from "../models/alumno.model";
import { iAlumno } from "../interfaces/alumno.interface";
import bcrypt from 'bcrypt';
import { Carrera } from "../models/carrera.model";

export const getAllAlumnosService = async () => {
    
    const alumnos = await Alumno.findAll({ include: Carrera });
    
    return alumnos;
};

export const getOneAlumnoService = async (id:string) => {

    const alumno = await Alumno.findOne({ include: Carrera, where: { id: id } });
    
    return alumno;
};

export const createAlumnoService = async (alumno:iAlumno) => {
    
    const hashedPassword = await bcrypt.hash(alumno.password,10);

    const dataNewAlumno = await Alumno.create({
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        legajo:alumno.legajo,
        dni: alumno.dni,
        email: alumno.email,
        telefono: alumno.telefono,
        password: hashedPassword,
        estado:alumno.estado,
        carreraId:alumno.carreraId
    });

    return dataNewAlumno;
};

export const updateAlumnoService = async (id:string, alumno:iAlumno) => {

    const hashedPassword = await bcrypt.hash(alumno.password,10);

    const updatedAlumno = await Alumno.update(
        {
            nombre: alumno.nombre,
            apellido: alumno.apellido,
            email: alumno.email,
            telefono: alumno.telefono,
            password: hashedPassword,
        },
        {
         where: {id : id}
        });

    return updatedAlumno;    
};


export const deleteAlumnoService = async (id:string) => {

    const deletedAlumno = await Alumno.destroy({ where: { id: id } });

    return deletedAlumno;
};