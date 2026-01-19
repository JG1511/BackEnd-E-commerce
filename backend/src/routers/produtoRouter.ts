import { Router } from "express";
import ProdutoController from "../controllers/produtoController";

const produtoRouter = Router()

produtoRouter.get('/listar_produtos', ProdutoController.getProduto);
produtoRouter.get('/listar_produto/:id', ProdutoController.getProdutoId);
produtoRouter.post('/criar_produto', ProdutoController.createProduto);
produtoRouter.put('/editar_produto/:id', ProdutoController.updateProduto);
produtoRouter.delete('/deletar_produto:/id', ProdutoController.deleteProduto);

export default produtoRouter