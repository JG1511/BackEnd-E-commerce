import { Router } from "express";
import ListafavoritoController from "../controllers/listafavoritoController";

const listaFavoritoRouter = Router();

listaFavoritoRouter.get('/listafovorito/:userId', ListafavoritoController.getListaFavorito);
listaFavoritoRouter.post('/add_na_listafavorito/:userId', ListafavoritoController.addProdutoListaFavorito);
listaFavoritoRouter.get('/check_na_listafavorito/:userId', ListafavoritoController.checkListaFavorito);
listaFavoritoRouter.delete('/delete_produto_na_listafavorito/:userId', ListafavoritoController.deleteListaFavorito);

export default listaFavoritoRouter;