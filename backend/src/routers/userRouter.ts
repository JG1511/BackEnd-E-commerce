import { Router } from "express";
import UserController from "../controllers/userController";

const routerUser = Router();

routerUser.get('/listar_usuarios',UserController.getUser);
routerUser.get('/listar_usuario/:id',UserController.getUserId);
routerUser.post('/criar_usuario', UserController.createUser);
routerUser.put('/editar_usuario/:id', UserController.updateUser);
routerUser.delete('/deletar_usuario/:id', UserController.deleteUser);
routerUser.post('/login', UserController.login);

export default routerUser;
