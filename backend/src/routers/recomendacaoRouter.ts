import { Router } from "express";
import RecomendacaoController from "../controllers/recomendacaoController";


const recomendacaoRouter = Router();

recomendacaoRouter.post('/lista_de_recomendacao', RecomendacaoController.addListaRecomendacao)

export default recomendacaoRouter