import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";

export interface DecodedToken {
    userId: string;
}


class AuthMiddleware {

    static authenticateUser = (req: Request, res: Response, next: NextFunction) => {
        // Extrai o token do Http cookie, se não existir retorna um status 401
        const token = req.cookies.accesToken;
        if (!token) res.status(401);

        try {
            //Verifica se o token que está sendo usado é o secret lá do authconfig
            const decodedToken = jwt.verify(token, authConfig.secret) as DecodedToken
            // Se o token for valido, ele irá anexar as informção na requisição do objeto
            (req as any).userId = decodedToken.userId;
            next();
        } catch (error) {
            console.error('Autenticação Falhou:', error)
            res.json({ message: 'Não tem token' })
        }
    };

    static refreshTokenValidation = (req: Request, res: Response, next: NextFunction) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) res.status(401);

        try {
            const decodedToken = jwt.verify(refreshToken, authConfig.refresh_secret) as { userId: string }
            (req as any).userId = decodedToken.userId;
            next();
        } catch (error) {
            console.error('Refresh token falhou na autenticação:', error);
            res.json({message: 'Não tem Refresh token'});
        }
    }

}

export default new AuthMiddleware();