import { Router } from "express";
import { getAllCarreras,
         getOneCarrera,
         createNewCarrera,
         updateCarrera,
         deleteCarrera } from "../controllers/carreras.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAllCarreras)
      .get('/:id', validateToken, getOneCarrera)
      .post('/', validateToken, createNewCarrera)
      .put('/:id', validateToken, updateCarrera)
      .delete('/:id', validateToken, deleteCarrera);

export default router;