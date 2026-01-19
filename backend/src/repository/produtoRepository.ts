import { prisma } from "../db/db";
import { Prisma } from "../generated/prisma/client";

class ProdutoRepository {
    async findAll() {
        const result = await prisma.produto.findMany();
        return result;
    }

    async findId(id: string) {
        const result = await prisma.produto.findUnique({
            where: { id_produto: id }
        })

        return result;
    }

    async create(nome: string, descricao: string, preco: number, cor: string, modelo: string, categoriaId: number) {
        const result = await prisma.produto.create({
            data: {
                nome: nome,
                descricao: descricao,
                //Converte o number em Decimal
                preco: new Prisma.Decimal(preco),
                cor: cor,
                modelo: modelo,
                categoria: {
                    connect: { id_categoria: categoriaId }
                }
            }
        });

        return result;
    }

    async update(id: string, nome: string, descricao: string, preco: number, cor: string, modelo: string, categoriaId: number) {
        const result = await prisma.produto.update({
            where: {
                id_produto: id
            },
            data: {
                nome: nome,
                descricao: descricao,
                preco: new Prisma.Decimal(preco),
                cor: cor,
                modelo: modelo,
                categoria: {
                    connect: { id_categoria: categoriaId }
                }
            }
        });

        return result;
    }

    async delete(id: string) {
        await prisma.produto.delete({
            where: { id_produto: id }
        })
    }
}

export default new ProdutoRepository();

