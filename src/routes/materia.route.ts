import { Router } from "express";
import { getAllMaterias,
         getOneMateria,
         createNewMateria,
         updateMateria,
         deleteMateria } from "../controllers/materias.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAllMaterias)
      .get('/:id', validateToken, getOneMateria)
      .post('/', validateToken, createNewMateria)
      .put('/:id', validateToken, updateMateria)
      .delete('/:id', validateToken, deleteMateria);

export default router;