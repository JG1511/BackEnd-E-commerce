import ListafavoritoServicer from "../services/listafavoritoServicer";

class ListaFavoritoController {


    async getListaFavorito(req: any, res: any) {
        const { userId } = req.params;
        const list = await ListafavoritoServicer.getListaFavorito(userId);
        res.status(200).json(list);
    }

    async addProdutoListaFavorito(req: any, res: any) {
        const { userId } = req.params;
        const { produtoId } = req.body;
        console.log(userId, produtoId)
        const addProduto = await ListafavoritoServicer.addProdutoListaFavorito(userId, produtoId);
        res.status(201).json(addProduto);

    }

    async checkListaFavorito(req: any, res: any) {
        const { userId } = req.params;
        const { produtoId } = req.body;
        const checkProduto = await ListafavoritoServicer.checkListaFavorito(userId, produtoId);
        res.status(201).json(checkProduto);
    }

    async deleteListaFavorito(req: any, res: any) {
        const { userId } = req.params;
        const { produtoId } = req.body;
        await ListafavoritoServicer.deleteListaFavorito(userId, produtoId)
        res.status(200).json({ message: 'produto retirado da lista com sucesso' });
    }
}

export default new ListaFavoritoController();