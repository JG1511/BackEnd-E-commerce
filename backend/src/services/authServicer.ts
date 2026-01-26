import z, { email } from "zod";
import AuthRepository from "../repository/authRepository";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";

// Esquema que utiliza o zod para validação 
const loginSchema = z.object({
    email: z.string(),
    senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
})
// Criamos uma typagem para o TS
type LoginDTO = z.infer<typeof loginSchema>


class AuthServicer {
    async login({ email, senha }: LoginDTO) {
        try {
            const login = await AuthRepository.login(email, senha);

            if (!login) {
                throw new Error('Email ou senha Invalida');
            }

            // Gera o token de acesso com o tempo para expirar
            const accesToken = jwt.sign(
                { userId: login.id_usuario },
                authConfig.secret,
                { expiresIn: authConfig.secret_expires_in as any }
            );

            // Gera o token de acesso e também dar um refrash
            const refreshToken = jwt.sign(
                { userId: login.id_usuario },
                authConfig.refresh_secret,
                { expiresIn: authConfig.refresh_secret_expires_in as any }
            )

            return ([accesToken, refreshToken, login])


        } catch (error) {
            throw new Error('Login Falhou');
        }
    }

}

export default new AuthServicer();