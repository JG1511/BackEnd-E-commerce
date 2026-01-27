import AuthServicer from "../services/authServicer";


class AuthController {
    async login(req: any, res: any) {

        const { email, senha } = req.body;
        // como criamos a typagem, o argumento deve ser passado entre chaves
        const login = await AuthServicer.login({ email, senha });

        res.cookie("refreshToken", login.accesToken, {
            httpOnly: true, // faz que o token não consiga ser acessado via JS
            // secure : true, // quando subir para produção, ativar esta opção
            maxAge: 15 * 60 * 60 * 1000, // 15 minutos em milisegundos
            sameSite: "strict" // aqui irá colocar o IP do front
        });

        res.cookie("refreshToken", login.refreshToken, {
            httpOnly: true,
            // secure : true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "strict"
        });

        return res.status(200).json(login);

    }

    async logout(req: any, res: any) {
        const { userId } = req.params;
        await AuthServicer.logout(userId);

        res.clearCookie("acessToken");
        res.clearCookie("refreshToken");
        
        return res.status(200).json({ message: 'Usuário deslogado com sucesso' })
    }
}

export default new AuthController();