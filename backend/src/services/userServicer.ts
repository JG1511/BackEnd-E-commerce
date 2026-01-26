
import { prisma } from "../db/db";
import UserRepository from "../repository/userRepository"

class UserServicer {

    async getUser() {
        const rows = await UserRepository.findAll();
        return rows;
    }

    async getUserId(id: string) {
        const row = await UserRepository.findId(id);
        return row;
    }

    async createUser(nome: string, cpf: string, email: string, senha: string) {
        const row = await UserRepository.create(nome, cpf, email, senha);
        return row;
    }

    async updateUser(id: string, nome: string, cpf: string, email: string, senha: string) {
        const userExist = await prisma.usuario.findUnique({
            where: { id_usuario: id }
        })

        if (!userExist) {
            throw new Error('Usuário não existente')
        } else {
            const row = await UserRepository.update(id, nome, cpf, email, senha);
            return row;
        }
    }

    async deleteUser(id: string) {
        await UserRepository.delete(id);
    }

}

export default new UserServicer()