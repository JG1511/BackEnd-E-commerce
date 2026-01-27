import { prisma } from "../db/db";

class AuthRepository {
    async login(email: string, senha: string) {
        return await prisma.usuario.findUnique({
            where: {
                email,
                senha
            }
        });
    }

    async addRefrashToken(email: string, refreshToken: string) {
        return await prisma.usuario.update({
            where: { email },
            data: {
                refreshToken
            }
        });
    }

    async logout(userId : string) {
        return await prisma.usuario.update({
            where : {id_usuario : userId},
            data :{
                refreshToken : null
            }
        });
    }
}

export default new AuthRepository();