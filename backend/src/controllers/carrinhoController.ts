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

    async addProdutoNoCarrinho(req: any, res: any) {
        const { userId } = req.params;
        const { produtoId, quantidade } = req.body;
        const addProduto = await CarrinhoServicer.addProdutoNoCarrinho(userId, produtoId, quantidade);
        res.status(200).json(addProduto);
    }

    async listProdutoNoCarrinho(req: any, res: any) {
        const { userId } = req.params;
        const list = await CarrinhoServicer.listProdutosNoCarrinho(userId);
        res.status(200).json(list);
    }

    async incrementItem(req : any, res : any) {
        const {itemId, quantidade} = req.body;
        const increment = await CarrinhoServicer.addItemNaQuantidade(itemId,quantidade);
        res.status(200).json(increment)
    }

    async deleteItem(req : any, res : any){
        const {itemId} = req.body;
        await CarrinhoServicer.deleteItem(itemId)
    }
}

export default new CarrinhoController();