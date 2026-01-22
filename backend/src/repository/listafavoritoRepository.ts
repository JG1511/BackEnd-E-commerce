import { prisma } from "../db/db";

class ListaFavoritoRepository {
    async findList(id_usuario: string) {
        const result = await prisma.lista_Favorito.findMany({
            where: {
                usuarioId: id_usuario
            },
            include: {
                produto: true
            }
        });

        return result;
    }

    async addProdcutToList(id_usuario: string, id_produto: string) {
        const result = await prisma.lista_Favorito.upsert({
            where: {
                produtoId_usuarioId: {
                    produtoId: id_produto,
                    usuarioId: id_usuario
                }
            },
            update: {},
            create: {
                usuarioId: id_usuario,
                produtoId: id_produto
            },
            include: {
                produto: true
            }
        })
    }

    async isFavorit(id_usuario: string, id_produto: string) {
        const result = await prisma.lista_Favorito.findUnique({
            where: {
                produtoId_usuarioId: {
                    produtoId: id_produto,
                    usuarioId: id_usuario
                }
            }
        });

        // o operador "!!" ele converte qualquer result em booleano 
        return !!result;
    }


    async delete(id_usuario: string, id_produto: string) {
        const result = await prisma.lista_Favorito.delete({
            where: {
                produtoId_usuarioId: {
                    produtoId: id_produto,
                    usuarioId: id_usuario
                }
            },
        });

        return result;
    }
}

export default new ListaFavoritoRepository();