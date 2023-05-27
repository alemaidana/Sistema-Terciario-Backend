import { Router } from "express";
import { getAllNotasExamen,
         getOneNotaExamen,
         createNewNotaExamen,
         updateNotaExamen,
         deleteNotaExamen } from "../controllers/notaExamen.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAllNotasExamen)
      .get('/:id', validateToken, getOneNotaExamen)
      .post('/', validateToken, createNewNotaExamen)
      .put('/:id', validateToken, updateNotaExamen)
      .delete('/:id', validateToken, deleteNotaExamen);

export default router;