import { prisma } from "../db/db";
import { Prisma } from "../generated/prisma/client";

class CarrinhoRepository {
    async findCart(id_usuario: string) {
        const result = await prisma.carrinho.findFirst({
            where: {
                usuarioId: id_usuario,
                status: 'ABERTO'
            },
            include: {
                itemCarrinho: {
                    include: {
                        produto: true
                    }
                }
            }
        })

        return result;
    }

    async create(id_usuario: string) {
        const result = await prisma.carrinho.create({
            data: {
                usuarioId: id_usuario,
                status: 'ABERTO'
            },
            include: {
                itemCarrinho :{
                    include : {
                        produto : true
                    }
                }
            }
        })

        return result;
    }

    async addProductToCart(carrinhoId: string, produtoId: string, quantidade: number, preco: Prisma.Decimal) {
        //upsert ele basicamente faz o papel do if e o else, neste caso ele vai verificar se já existe o produto no carrinho ou não.
        const result = await prisma.item_Carrinho.upsert({
            where: {
                produtoId_carrinhoId: {
                    produtoId,
                    carrinhoId,
                },
            },
            update: {
                quantidade: {
                    increment: quantidade
                }
            },
            create: {
                carrinhoId: carrinhoId,
                produtoId: produtoId,
                quantidade: quantidade,
                preco_unitario: new Prisma.Decimal(preco)
            }
        })

        return result;
    }

    async listProductsInCart(carrinhoId: string) {
        const result = await prisma.carrinho.findUnique({
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

        return result;
    }

    async findItemById(itemId: number) {
        const result = await prisma.item_Carrinho.findUnique({
            where: { id_item: itemId }
        })

        return result;
    }

    async incrementItemQuantity(itemId: number, quantidade: number) {
        const result = await prisma.item_Carrinho.update({
            where: { id_item: itemId },
            data: {
                quantidade: {
                    increment: quantidade
                }
            }
        })

        return result;

    }

    async deleteItem(itemId: number) {
        await prisma.item_Carrinho.delete({
            where: { id_item: itemId }
        })
    }
}

export default new CarrinhoRepository();