import { Router } from "express";
import ListafavoritoController from "../controllers/listafavoritoController";

const listaFavoritoRouter = Router();

listaFavoritoRouter.get('/teste', ListafavoritoController.getListaFavorito)




export default listaFavoritoRouter;