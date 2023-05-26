import { Router } from "express";
import { getAllAlumnos,
         getOneAlumno,
         createNewAlumno,
         deleteAlumno,
         updateAlumno  } from "../controllers/alumnos.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAllAlumnos)
      .get('/:id', validateToken, getOneAlumno)
      .post('/', validateToken, createNewAlumno)
      .put('/:id', validateToken, updateAlumno)
      .delete('/:id', validateToken, deleteAlumno);

export default router;