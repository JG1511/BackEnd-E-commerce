import express from "express";

import categoriaRouter from "./routers/categoriaRouter";
import produtoRouter from "./routers/produtoRouter";
import routerUser from "./routers/userRouter";
import carrinhoRouter from "./routers/carrinhoRouter";
import listaFavoritoRouter from "./routers/listafavoritoRouter";

const app = express()

app.use(express.json());

// Aqui sinalizamos as rotas que o nosso app irá utilizar
app.use(routerUser);
app.use(produtoRouter);
app.use(categoriaRouter);
app.use(carrinhoRouter);
app.use(listaFavoritoRouter);

app.listen(8080, () => {
    console.log('O servedor está rodando na porta 8080')
})



// id de teste de usuário : 59c522c2-ae75-46a5-9372-e111518ae74e
// id de teste de produto : 81219da5-8705-452c-b040-90ebd5214aa9