import { Docente } from "../models/docente.model";
import { iDocente } from "../interfaces/docente.interface";
import bcrypt from "bcrypt";

export const getAllDocentesService = async () => {
  try {
    const docentes = await Docente.findAll();

    return docentes;
  } catch (error) {
    throw error;
  }
};

export const getOneDocenteService = async (id: string) => {
  try {
    const docente = await Docente.findOne({ where: { id: id } });

    return docente;
  } catch (error) {
    throw error;
  }
};

export const createDocenteService = async (docente: iDocente) => {
  try {
    const hashedPassword = await bcrypt.hash(docente.password, 10);

    const dataNewDocente = await Docente.create({
      nombre: docente.nombre,
      apellido: docente.apellido,
      matricula: docente.matricula,
      dni: docente.dni,
      email: docente.email,
      telefono: docente.telefono,
      password: hashedPassword,
      estado: docente.estado,
      f_nac: docente.f_nac,
      avatar: docente.avatar,
    });

    return dataNewDocente;
  } catch (error) {
    throw error;
  }
};

export const updateDocenteService = async (id: string, docente: iDocente) => {
  try {
    const hashedPassword = await bcrypt.hash(docente.password, 10);

    const updatedDocente = await Docente.update(
      {
        nombre: docente.nombre,
        apellido: docente.apellido,
        matricula: docente.matricula,
        dni: docente.dni,
        email: docente.email,
        telefono: docente.telefono,
        password: hashedPassword,
        estado: docente.estado,
        f_nac: docente.f_nac,
        avatar: docente.avatar,
      },
      {
        where: { id: id },
      }
    );

    return updatedDocente;
  } catch (error) {
    throw error;
  }
};

export const deleteDocenteService = async (id: string) => {
  try {
    const deletedDocente = await Docente.destroy({ where: { id: id } });

    return deletedDocente;
  } catch (error) {
    throw error;
  }
};
