import { prisma } from "../db/db";

class CategoriaRepository {
    async findAll() {
        const result = await prisma.categoria.findMany();
        return result;
    }

    async findId(id: number) {
        const result = await prisma.categoria.findUnique({
            where: { id_categoria: id }
        });
        return result;
    }

    async create(nome: string, descricao: string) {
        const result = await prisma.categoria.create({
            data: {
                nomeCategoria: nome,
                descricao: descricao
            }
        });
        return result;
    }

    async update(id: number, nome: string, descricao: string) {
        const result = await prisma.categoria.update({
            where: { id_categoria: id },
            data: {
                nomeCategoria: nome,
                descricao: descricao
            }
        });
        return result;
    }

    async delete(id: number) {
        await prisma.categoria.delete({
            where: { id_categoria: id }
        })
    }

    async categoriaComProdutos(id: number) {
        const result = await prisma.categoria.findUnique({
            where: { id_categoria: id },
            include: { produto: true }
        })
        return result;
    }
}


export default new CategoriaRepository();