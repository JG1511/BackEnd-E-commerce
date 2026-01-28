import { Router } from "express";

import AuthController from "../controllers/authController";
import { authenticateUser, refreshTokenValidation } from "../middlewares/auth.middleware";


const authRouter = Router();


authRouter.post('/login', AuthController.login);
authRouter.post('/logout',authenticateUser, AuthController.logout );
authRouter.post('/refresh-token', refreshTokenValidation, AuthController.refreshToken);

export default authRouter;