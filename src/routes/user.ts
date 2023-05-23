import { Router } from "express";
import { newUser, login } from "../controllers/users.controller";


const router = Router();

router.post('/', newUser);

router.post('/login', login);

export default router;