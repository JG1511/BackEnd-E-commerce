
import { prisma } from "../db/db";
import UserRepository from "../repository/userRepository"
class UserServicer {

    async getUser() {
        const rows = UserRepository.findAll();
        return rows;
    }

    async getUserId(id: string) {
        const row = UserRepository.findId(id);
        return row;
    }

    async createUser(nome: string, cpf: string, email: string, senha: string) {
        const row = UserRepository.create(nome, cpf, email, senha);
        return row;
    }

    async updateUser(id: string, nome: string, cpf: string, email: string, senha: string) {
        const userExist = await prisma.usuario.findUnique({
            where: { id_usuario: id }
        })

        if (!userExist) {
            throw new Error('Usuário não existente')
        } else {
            const row = UserRepository.update(id, nome, cpf, email, senha);
            return row;
        }
    }

    async deleteUser(id : string){
        UserRepository.delete(id);
    }
}

export default new UserServicer()