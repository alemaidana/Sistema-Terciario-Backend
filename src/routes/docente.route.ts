import { Router } from "express";
import { getAllDocentes,
         getOneDocente,
         createNewDocente,
         updateDocente,
         deleteDocente } from "../controllers/docentes.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAllDocentes)
      .get('/:id', validateToken, getOneDocente)
      .post('/', validateToken, createNewDocente)
      .put('/:id', validateToken, updateDocente)
      .delete('/:id', validateToken, deleteDocente);

export default router;