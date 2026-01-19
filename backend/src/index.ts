import express from "express";
import routerUser from "./routers/userRouter";

const app = express()

app.use(express.json());

// Aqui sinalizamos as rotas que o nosso app irá utilizar
app.use(routerUser);

app.listen(8080, () => {
    console.log('O servedor está rodando na porta 8080')
})