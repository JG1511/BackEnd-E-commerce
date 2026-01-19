import { prisma } from "../db/db";
import ProdutoRepository from "../repository/produtoRepository"

class ProdutoServicer {

    async getProduto() {
        const rows = ProdutoRepository.findAll();
        return rows;
    }

    async getProdutoId(id: string) {
        const row = ProdutoRepository.findId(id);
        return row;
    }

    async createProduto(nome: string, descricao: string, preco: number, cor: string, modelo: string, categoriaId: number) {
        const row = ProdutoRepository.create(nome, descricao, preco, cor, modelo, categoriaId);
        return row;
    }

    async updateProduto(id: string, nome: string, descricao: string, preco: number, cor: string, modelo: string, categoriaId: number) {
        const produtoExist = await prisma.produto.findUnique({
            where: { id_produto: id }
        });

        if (!produtoExist) {
            throw new Error('Produto não existente')
        } else {
            const row = ProdutoRepository.update(id, nome, descricao, preco, cor, modelo, categoriaId);
            return row;
        }

    }

    async deleteProduto(id: string) {
        ProdutoRepository.delete(id);
    }

}

export default new ProdutoServicer()