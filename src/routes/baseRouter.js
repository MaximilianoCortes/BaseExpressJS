import { Router } from "express";
import { decirHola } from "../controllers/baseController.js"; //importamos los controladores, las funciones

const router = Router();

router.get("/", decirHola); //aqui definimos la ruta y si es get, post u otro, tambien asociamos la funcion que tiene que hacer esa ruta

export default router;