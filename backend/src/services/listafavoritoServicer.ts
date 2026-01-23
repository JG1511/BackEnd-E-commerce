import ListafavoritoRepository from "../repository/listafavoritoRepository";

class ListaFavoritoServicer {
    async getListaFavorito(usuarioId: string) {
        const row = await ListafavoritoRepository.findList(usuarioId);
        return row;
    }

    async addProdutoListaFavorito(usuarioId: string, produtoId: string) {
        const row = await ListafavoritoRepository.addProdcutToList(usuarioId, produtoId);
        return row;
    }

    async checkListaFavorito(usuarioId: string, produtoId: string) {
        const row = await ListafavoritoRepository.isFavorit(usuarioId, produtoId);
        return row;
    }

    async deleteListaFavorito(usuarioId: string, produtoId: string) {
        await ListafavoritoRepository.delete(usuarioId, produtoId);
    }
}

export default new ListaFavoritoServicer();