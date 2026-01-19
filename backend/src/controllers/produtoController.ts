import ProdutoServicer from "../services/produtoServicer"

class ProdutoController {
    async getProduto(req: any, res: any) {
        const produtoAll = await ProdutoServicer.getProduto();
        res.status(200).json(produtoAll);
    }

    async getProdutoId(req: any, res: any) {
        const { id } = req.params;
        const produtoId = await ProdutoServicer.getProdutoId(id);
        res.status(200).json(produtoId);
    }

    async createProduto(req: any, res: any) {
        const { nome, descricao, preco, cor, modelo, categoriaId } = req.body;
        const newProduto = await ProdutoServicer.createProduto(nome, descricao, preco, cor, modelo, categoriaId);
        res.status(201).json(newProduto);
    }

    async updateProduto(req: any, res: any) {
        const { id } = req.params;
        const { nome, descricao, preco, cor, modelo, categoriaId } = req.body;
        const updateProduto = await ProdutoServicer.updateProduto(id, nome, descricao, preco, cor, modelo, categoriaId);
        res.status(200).json(updateProduto);
    }

    async deleteProduto(req : any, res : any){
        const {id} = req.params;
        await ProdutoServicer.deleteProduto(id);
        res.status(200).json({message: 'Produto excluido com sucesso'});
    }
}

export default new ProdutoController();