import express from "express";
import routerUser from "./routers/userRouter";
import produtoRouter from "./routers/produtoRouter";

const app = express()

app.use(express.json());

// Aqui sinalizamos as rotas que o nosso app irá utilizar
app.use(routerUser);
app.use(produtoRouter);

app.listen(8080, () => {
    console.log('O servedor está rodando na porta 8080')
})