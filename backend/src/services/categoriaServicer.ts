import CategoriaRepository from "../repository/categoriaRepository"

class CategoriaServicer {
    async getCategoria() {
        const rows = CategoriaRepository.findAll();
        return rows;
    }

    async getCategoriaId(id: number) {
        const row = CategoriaRepository.findId(id);
        return row;
    }

    async createCategoria(nome: string, descricao: string) {
        const row = CategoriaRepository.create(nome, descricao);
        return row;
    }

    async updateCategoria(id: number, nome: string, descricao: string) {
        const categoriaExist = CategoriaRepository.findId(id);
        if (!categoriaExist) {
            throw new Error('está categoria não existe')
        } else {
            const row = CategoriaRepository.update(id, nome, descricao);
            return row;
        }
    }

    async deleteProduto(id: number) {
        const categoriaExist = CategoriaRepository.findId(id);
        if (!categoriaExist) {
            throw new Error('está categoria não existe')
        } else {
            CategoriaRepository.delete(id)
        }

    }

    async categoriaComProduto(id: number) {
        const row = CategoriaRepository.categoriaComProdutos(id);
        return row;
    }


}

export default new CategoriaServicer();