import { Router } from "express";
import { getAllFinalExams,
         getOneFinalExam,
         createNewFinalExam,
         updateFinalExam,
         deleteFinalExam } from "../controllers/finalExamen.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAllFinalExams)
      .get('/:id', validateToken, getOneFinalExam)
      .post('/', validateToken, createNewFinalExam)
      .put('/:id', validateToken, updateFinalExam)
      .delete('/:id', validateToken, deleteFinalExam);

export default router;