import { Router } from "express";
import UserController from "../controllers/userController";

const routerUser = Router();

routerUser.get('/listar_usuários',UserController.getUser)
routerUser.get('/listar_usuário',UserController.getUserId)
routerUser.post('/criar_usuário', UserController.createUser)
routerUser.put('/editar_usuário', UserController.updateUser)
routerUser.delete('/deletar_usuário', UserController.deleteUser)

export default routerUser
