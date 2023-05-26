import { Router } from "express";
import { getAllAsignaturas,
         getOneAsignatura,
         createNewAsignatura,
         updateAsignatura,
         deleteAsignatura } from "../controllers/asignatura.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAllAsignaturas)
      .get('/:id', validateToken, getOneAsignatura)
      .post('/', validateToken, createNewAsignatura)
      .put('/:id', validateToken, updateAsignatura)
      .delete('/:id', validateToken, deleteAsignatura);

export default router;