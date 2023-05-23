import { Router } from "express";
import { getDocentes } from "../controllers/docentes.controller";
import validateToken from './validate';

const router = Router();

router.get('/', validateToken, getDocentes)

export default router;