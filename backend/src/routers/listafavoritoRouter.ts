import { Router } from "express";
import ListafavoritoController from "../controllers/listafavoritoController";

const listaFavoritoRouter = Router();

listaFavoritoRouter.get('/listafovorito/:id', ListafavoritoController.getListaFavorito);
listaFavoritoRouter.post('/add_na_listafavorito/:id', ListafavoritoController.addProdutoListaFavorito);
listaFavoritoRouter.get('/check_na_listafavorito/:id', ListafavoritoController.checkListaFavorito);
listaFavoritoRouter.delete('/delete_produto_na_listafavorito/:id', ListafavoritoController.deleteListaFavorito);




export default listaFavoritoRouter;