import express from "express";

const app : any = express()

app.use(express.json());


app.get('/', (req : any,res : any) => {
    res.json('Gorge o curioso')
})

app.listen(8080, () => {
    console.log('O servedor está rodando na porta 8080')
})