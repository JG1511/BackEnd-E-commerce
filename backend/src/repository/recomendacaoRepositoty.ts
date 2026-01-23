import { prisma } from "../db/db";

class RecomendacaoRepository{
    async addToListRecommendation(id_produto : string){
        const result = await prisma.recomendacao.findMany({
            where : {
                produtoId : id_produto
            },
            include :{
                produto :{
                    include :{
                        categoria :{
                            include : {
                                produto : {
                                    where :{
                                        NOT : {
                                            id_produto : id_produto
                                        }
                                    },
                                    // aqui ele pega no máximo 6 produtos
                                    take : 6
                                }
                            }
                        }
                    }
                }
            }
        });
        return result;
    }
}

export default new RecomendacaoRepository();