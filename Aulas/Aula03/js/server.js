const express = require('express')
const app = express()
const port = 5010

app.use(express.json())

let database = []

// ENDPOINT
app.get('/', (req, res) => {
    try {
        return res.status(200).json({ produtos: database })
    } catch (error) {
        return res.status(500).json({ mensagem: error })
    }
})

// ENDPOINT
app.post('/adicionar-produto', (req, res) => {

    try {
        let produto = {
            nome: req.body.nome,
            valor: req.body.valor,
            descricao: req.body.descricao
        }
        database.push(produto)


        return res.status(201).json({ mensagem: 'produto add com sucesso' })

    } catch (error) {
        return res.status(500).json({ mensagem: error })
    }
})


app.listen(port, () => {
    console.log('Servidor executando!')
})
console.log(`http://localhost:${port}`)