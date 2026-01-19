import { Interface } from 'node:readline'
import { prisma } from '../db/db'

class UserRepository {

    async findAll() {
        const result = await prisma.usuario.findMany();
        return result;
    }

    async findId(id: string) {
        const result = await prisma.usuario.findUnique({
            where: {
                id_usuario: id
            }
        });
        return result;
    }

    async create(nome: string, cpf: string, email: string, senha: string) {

        const newUser = await prisma.usuario.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senha
            }
        });

        return newUser;
    }

    async update(id: string, nome: string, cpf: string, email: string, senha: string) {
        const updateUser = await prisma.usuario.update({
            where: {
                id_usuario: id
            },
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senha
            }
        });

        return updateUser;
    }

    async delete(id: string) {
        await prisma.usuario.delete({
            where: {
                id_usuario: id
            }
        })
    }

}

export default new UserRepository()

// Ideia para ver depois

// interface User{
//     id : string,
//     nome : string,
//     cpf : string,
//     email: string,
//     senha : string
//     carrinho : any[]
//     listaFavorito : any[]
//     recomendacao : any[]
// }