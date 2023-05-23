import { Router } from "express";
import { getAlumnos } from "../controllers/alumnos.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getAlumnos)

export default router;