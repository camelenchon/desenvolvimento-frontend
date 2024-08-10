const express = require('express')
const app = express()
const porta = 5000

let produtos = [
    {
        nome: "copo de boteco",
        valor: 5,
        descricao: "O mais autentico dos botecos do brasil",
        imagem: "https://cdn.awsli.com.br/1209/1209299/produto/62275218/b601ca3326.jpg"
    },
    {
        nome: "copo Stanley",
        valor: 200,
        descricao: "Copo termico",
        imagem: "https://www.stanley1913.com.br/cdn/shop/files/264561-8.jpg?v=1718376318"
    },
    {
        nome: "copo duplo",
        valor: 20,
        descricao: "Copo de vidro com parede dupla",
        imagem: "https://oxfordporcelanas.vteximg.com.br/arquivos/ids/177367-1000-1000/117022-1.jpg?v=637889933985700000"
    }

]

app.get('/produto', (requisicao, resposta) => {
    let produtoQuery = requisicao.query.nomeQualquer
    console.log(produtoQuery)
    if (produtoQuery === undefined) {
        return resposta.status(400).json({ mensage: "Erro na Solicitação" })
    }

    let produto = produtos.find(p => p.nome === produtoQuery)
    if (produto === undefined) {
        return resposta.status(404).json({ message: "Produto não encontrado!" })
    }
    return resposta.status(200).json(produto)

})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})