import { Request, Response } from "express";
import {
  getAllAlumnosService,
  getOneAlumnoService,
  createAlumnoService,
  updateAlumnoService,
  deleteAlumnoService,
} from "../services/alumno.service";
import { handleHttp } from "../shared/response/error.response";

export const getAllAlumnos = async (req: Request, res: Response) => {
  try {
    const alumnos = await getAllAlumnosService();

    res.status(200).json(alumnos);
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};

export const getOneAlumno = async (req: Request, res: Response) => {
  try {
    const response = await getOneAlumnoService(req.params.id);

    const alumno = response ? response : "No Existe el alumno";

    res.status(200).json(alumno);
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};

export const createNewAlumno = async (req: Request, res: Response) => {
  try {
    const alumno = await createAlumnoService(req.body);

    res.status(201).json(alumno);
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};

export const updateAlumno = async (req: Request, res: Response) => {
  try {
    const alumno = await updateAlumnoService(req.params.id, req.body);

    const updateSuccess =
      alumno[0] == 1 ? "Actualizacion con exito" : "No se pudo actualizar";

    res.status(200).json(updateSuccess);
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};

export const deleteAlumno = async (req: Request, res: Response) => {
  try {
    const alumno = await deleteAlumnoService(req.params.id);

    res.status(204).json("Borrado Exitosamente");
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};
