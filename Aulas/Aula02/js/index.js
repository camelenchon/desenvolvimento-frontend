const express = require('express')
const app = express()
const porta = 5000

let produtos = [
    {
        nome: "Bolo de morango",
        valor: 200,
        descricao:"Bolo de morango delicioso",
        imagem: "https://cdn5.colorir.com/desenhos/color/201707/bolo-de-morango-comida-lacteos-e-sobremesas-pintado-por-sananamor-1340813.jpg"
    }
    ,
    {
        nome: "Bolo de chocolate",
        valor: 250,
        descricao:"Acompanha uma deliciosa cobertura",
        imagem: "https://cdn.pixabay.com/photo/2014/04/02/16/30/cake-307466_960_720.png"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        valor: 275,
        descricao:"Bolo de cenoura acompanhado por uma deliciosa cobertura",
        imagem: "https://i.pinimg.com/originals/5f/5a/2e/5f5a2ef90ed6358cf0ef5743c642faf5.png"
    }
]

app.get('/', (requisicao, resposta) => {
    try {
        return resposta.json(produtos).status(200)
    }catch(error){  
        return resposta.json({message: "Operacao invalida"}).status(400)
    }

})

app.get('/comida', (requisicao, resposta) => {
    return resposta.json({nome:"macarrao"}).status(200)

})
app.get('/jogos', (requisicao, resposta) => {    
    let queryUrl = requisicao.query
    console.log(requisicao.query)

    return resposta.json("deu certo").status(200)
})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})