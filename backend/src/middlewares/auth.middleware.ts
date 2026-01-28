import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";

export interface DecodedToken {
  userId: string;
}

export const authenticateUser: RequestHandler = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    res.status(401).json({ message: "Token não fornecido" });
    return;
  }

  try {
    const decodedToken = jwt.verify(
      token,
      authConfig.secret
    ) as DecodedToken;

    (req as any).userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error("Autenticação falhou:", error);
    res.status(401).json({ message: "Token inválido" });
  }
};

export const refreshTokenValidation: RequestHandler = (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    res.status(401).json({ message: "Refresh token não fornecido" });
    return;
  }

  try {
    const decodedToken = jwt.verify(
      refreshToken,
      authConfig.refresh_secret
    ) as DecodedToken;

    (req as any).userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error("Refresh token inválido:", error);
    res.status(401).json({ message: "Refresh token inválido" });
  }
};
