import { Alumno } from "../models/alumno.model";
import { iAlumno } from "../interfaces/alumno.interface";
import bcrypt from "bcrypt";
import { Carrera } from "../models/carrera.model";

export const getAllAlumnosService = async () => {
  try {
    const alumnos = await Alumno.findAll({ include: Carrera });

    return alumnos;
  } catch (error) {
    throw error;
  }
};

export const getOneAlumnoService = async (id: string) => {
  try {
    const alumno = await Alumno.findOne({
      include: Carrera,
      where: { id: id },
    });

    return alumno;
  } catch (error) {
    throw error;
  }
};

export const createAlumnoService = async (alumno: iAlumno) => {
  try {
    const hashedPassword = await bcrypt.hash(alumno.password, 10);

    const dataNewAlumno = await Alumno.create({
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      legajo: alumno.legajo,
      dni: alumno.dni,
      email: alumno.email,
      telefono: alumno.telefono,
      password: hashedPassword,
      estado: alumno.estado,
      f_nac: alumno.f_nac,
      curso: alumno.curso,
      carreraId: alumno.carreraId,
      avatar: alumno.avatar,
    });

    return dataNewAlumno;
  } catch (error) {
    throw error;
  }
};

export const updateAlumnoService = async (id: string, alumno: iAlumno) => {
  try {
    const hashedPassword = await bcrypt.hash(alumno.password, 10);

    const updatedAlumno = await Alumno.update(
      {
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        legajo: alumno.legajo,
        dni: alumno.dni,
        email: alumno.email,
        telefono: alumno.telefono,
        password: hashedPassword,
        estado: alumno.estado,
        f_nac: alumno.f_nac,
        curso: alumno.curso,
        carreraId: alumno.carreraId,
        avatar: alumno.avatar,
      },
      {
        where: { id: id },
      }
    );

    return updatedAlumno;
  } catch (error) {
    throw error;
  }
};

export const deleteAlumnoService = async (id: string) => {
  try {
    const deletedAlumno = await Alumno.destroy({ where: { id: id } });

    return deletedAlumno;
  } catch (error) {
    throw error;
  }
};
