import { prisma } from "../db/db";

class AuthRepository {
    async login(email: string, senha: string) {
        return await prisma.usuario.findUnique({
            where: {
                email,
                senha
            }
        })
    }

    async logout() {

    }
}

export default new AuthRepository();