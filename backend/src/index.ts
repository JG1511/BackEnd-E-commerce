import express from "express";

import categoriaRouter from "./routers/categoriaRouter";
import produtoRouter from "./routers/produtoRouter";
import routerUser from "./routers/userRouter";
import carrinhoRouter from "./routers/carrinhoRouter";

const app = express()

app.use(express.json());

// Aqui sinalizamos as rotas que o nosso app irá utilizar
app.use(routerUser);
app.use(produtoRouter);
app.use(categoriaRouter);
app.use(carrinhoRouter);

app.listen(8080, () => {
    console.log('O servedor está rodando na porta 8080')
})