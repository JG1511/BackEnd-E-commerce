import AuthRepository from "../repository/authRepository";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";
import { LoginDTO } from "../config/validacao.config";
import UserRepository from "../repository/userRepository";


class AuthServicer {
    async login({ email, senha }: LoginDTO) {
        try {
            const login = await AuthRepository.login(email, senha);

            if (!login) {
                throw new Error('Email ou senha Invalida');
            };

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
            );

            await AuthRepository.addRefrashToken(email,refreshToken);

            return {
                accesToken : accesToken,
                refreshToken : refreshToken,
                data :{
                    userid : login.id_usuario,
                    nome : login.nome,
                    email : login.email
                }
            }


        } catch (error) {
            throw new Error('Login Falhou');
        }
    }

    async logout(userId : string){
        const userExist =  await UserRepository.findId(userId);

        if(userExist){
            await AuthRepository.logout(userId);
        }
    }

}

export default new AuthServicer();