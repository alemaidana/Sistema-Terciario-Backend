import { Request, Response } from "express";
import {
  getAllDocentesService,
  getOneDocenteService,
  createDocenteService,
  updateDocenteService,
  deleteDocenteService,
} from "../services/docentes.service";
import { handleHttp } from "../shared/response/error.response";

export const getAllDocentes = async (req: Request, res: Response) => {
  try {
    const docentes = await getAllDocentesService();

    res.status(200).json(docentes);
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};

export const getOneDocente = async (req: Request, res: Response) => {
  try {
    const response = await getOneDocenteService(req.params.id);

    const docente = response ? response : "No Existe el docente";

    res.status(200).json(docente);
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};

export const createNewDocente = async (req: Request, res: Response) => {
  try {
    const docente = await createDocenteService(req.body);

    res.status(201).json(docente);
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};

export const updateDocente = async (req: Request, res: Response) => {
  try {
    const docente = await updateDocenteService(req.params.id, req.body);

    const updateSuccess =
      docente[0] == 1 ? "Actualizacion con exito" : "No se pudo actualizar";

    res.status(200).json(updateSuccess);
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};

export const deleteDocente = async (req: Request, res: Response) => {
  try {
    const docente = await deleteDocenteService(req.params.id);

    res.status(204).json("Borrado Exitosamente");
  } catch (error) {
    handleHttp(res, "FAILED", error);
  }
};
