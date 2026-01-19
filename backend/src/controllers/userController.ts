import UserServicer from "../services/userServicer"
class UserController {

    async getUser(req: any, res: any) {
        const userAll = await UserServicer.getUser();
        res.status(200).json(userAll);
    }

    async getUserId(req: any, res: any) {
        const { id } = req.params;
        const userId = await UserServicer.getUserId(id);
        res.status(200).json(userId);
    }

    async createUser(req: any, res: any) {
        const { nome, cpf, email, senha } = req.body;
        const newUser = await UserServicer.createUser(nome, cpf, email, senha);
        res.status(201).json(newUser);
    }

    async updateUser(req: any, res: any) {
        const { id } = req.params;
        const { nome, cpf, email, senha } = req.body;
        const updateUser = await UserServicer.updateUser(id, nome, cpf, email, senha)
        res.status(200).json(updateUser);
    }

    async deleteUser(req: any, res: any) {
        const { id } = req.params;
        await UserServicer.deleteUser(id);
        res.status(200).json({ message: "Usuário deltado com sucesso" });


    }
}

export default new UserController();