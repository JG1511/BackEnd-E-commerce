import { prisma } from "../db/db";
import { Prisma } from "../generated/prisma/client";

class Carrinho {
    async findCart(id_usuario: string) {
        const result = await prisma.carrinho.findFirst({
            where: {
                usuarioId: id_usuario,
                status: 'ABERTO'
            },
            include: {
                itemCarrinho: true
            }
        })

        return result
    }

    async create(id_usuario: string) {
        const result = await prisma.carrinho.create({
            data: {
                usuarioId: id_usuario,
                status: 'ABERTO'
            }
        })

        return result
    }

    async addProductToCart(carrinhoId: string, produtoId: string, quantidade: number, preco: number) {
        return await prisma.item_Carrinho.create({
            data: {
                preco_unitario: new Prisma.Decimal(preco),
                quantidade: quantidade,
                carrinhoId: carrinhoId,
                produtoId: produtoId
            }
        })
    }

    async listProductsInCart(carrinhoId: string) {
        return await prisma.carrinho.findUnique({
            where: {
                id_carrinho: carrinhoId
            }, include: {
                itemCarrinho: {
                    include: {
                        produto: true
                    }
                }
            }
        })
    }

    async existProduct(itemId: number) {
        return await prisma.item_Carrinho.findUnique({
            where: { id_item: itemId }
        })
    }
}