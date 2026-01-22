import { Router } from "express";
import CarrinhoController from "../controllers/carrinhoController";

const carrinhoRouter = Router();

carrinhoRouter.get('/listar_carrinho/:id', CarrinhoController.getCarrinho);
carrinhoRouter.get('/listar_produto_no_carrinho/:id', CarrinhoController.listProdutoNoCarrinho);
carrinhoRouter.post('/criar_carrinho/:id', CarrinhoController.createCarrinho);
carrinhoRouter.post('/add_produto_no_carrinho/:id', CarrinhoController.addProdutoNoCarrinho);
carrinhoRouter.post('/incrementar_item', CarrinhoController.incrementItem);
carrinhoRouter.delete('/deletar_item_no_carrinho', CarrinhoController.deleteItem);

export default carrinhoRouter;