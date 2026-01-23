import RecomendacaoRepositoty from "../repository/recomendacaoRepositoty";
class RecomendacaoServicer {
    async addListaRecomendacao(produtoId: string) {
        const row = await RecomendacaoRepositoty.addToListRecommendation(produtoId);
        return row
    }
}

export default new RecomendacaoServicer()