import { Router } from "express";
import UserController from "../controllers/userController";

const routerUser = Router();

routerUser.get('/listar_usuários',UserController.getUser);
routerUser.get('/listar_usuário/:id',UserController.getUserId);
routerUser.post('/criar_usuário', UserController.createUser);
routerUser.put('/editar_usuário/:id', UserController.updateUser);
routerUser.delete('/deletar_usuário/:id', UserController.deleteUser);

export default routerUser;
