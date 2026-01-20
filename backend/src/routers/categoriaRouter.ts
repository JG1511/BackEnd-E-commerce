import { Router } from "express";
import CategoriaController from "../controllers/categoriaController";

const categoriaRouter = Router();

categoriaRouter.get('/listar_categorias', CategoriaController.getCategoria);
categoriaRouter.get('/listar_categoria/:id', CategoriaController.getCategoriaId);
categoriaRouter.post('/criar_categoria', CategoriaController.createCategoria);
categoriaRouter.put('/editar_categoria/:id', CategoriaController.updateCategoria);
categoriaRouter.delete('/deletar_categoria:/id', CategoriaController.deleteCategoria);
categoriaRouter.get('/listar_produtos_em_categoria:/id', CategoriaController.categoriaComProduto);

export default categoriaRouter;