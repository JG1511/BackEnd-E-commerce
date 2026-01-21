import CarrinhoServicer from "../services/carrinhoServicer"
class CarrinhoController {
    async getCarrinho(req: any, res: any) {
        const { userId } = req.params;
        const carrinho = await CarrinhoServicer.getCarrinho(userId);
        res.status(200).json(carrinho);
    }

    async createCarrinho(req: any, res: any) {
        const { userId } = req.params;
        const newCarrinho = await CarrinhoServicer.createCarrinho(userId);
        res.status(201).json(newCarrinho);
    }

    async addProdutoNoCarrinho(req: any, res: any){
        const {carrinhoId} = req.params;
        const {produtoId} = req.params
        const addProduto = await CarrinhoServicer.addProdutoNoCarrinho()
    }
}