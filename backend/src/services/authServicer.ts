import z, { email } from "zod";
import AuthRepository from "../repository/authRepository";


const loginSchema = z.object({
    email: z.string(),
    senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
})

type LoginDTO = z.infer<typeof loginSchema>


class AuthServicer {
    async login({ email, senha } : LoginDTO) {
        try {
            const login = await AuthRepository.login(email,senha);

            if(! login){
                throw new Error('Email ou senha Invalida');
            }

            

        } catch (error) {
            
        }
    }
}

export default new AuthServicer();