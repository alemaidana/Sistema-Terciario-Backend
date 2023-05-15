import { Router } from "express";
import { newAlumno, login, getAlumnos } from "../controllers/alumnos.controller";

const router = Router();

router.post('/', newAlumno);

router.post('/login', login);

router.get('/alumnos', getAlumnos)

export default router;