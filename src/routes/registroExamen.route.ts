import { Router } from "express";
import { getAllRegistrosDeExamen,
         getOneRegistroDeExamen,
         createNewRegistroDeExamen,
         updateRegistroDeExamen,
         deleteRegistroDeExamen } from "../controllers/registroExamen.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAllRegistrosDeExamen)
      .get('/:id', validateToken, getOneRegistroDeExamen)
      .post('/', validateToken, createNewRegistroDeExamen)
      .put('/:id', validateToken, updateRegistroDeExamen)
      .delete('/:id', validateToken, deleteRegistroDeExamen);

export default router;