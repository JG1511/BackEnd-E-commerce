import RecomendacaoServicer from "../services/recomendacaoServicer";

class RecomendacaoController{
    async addListaRecomendacao(req: any, res: any){
        const {produtoId} = req.body;
        const addRecomendacao = await RecomendacaoServicer.addListaRecomendacao(produtoId);
        res.status(200).json(addRecomendacao)
    }
}

export default new RecomendacaoController()