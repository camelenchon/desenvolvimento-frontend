const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://camelenchon:programandoseufuturo@bancodedados.kyyuy.mongodb.net/"
const Usuario = require('./models/usuario')

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        let usuarios = await Usuario.find()
        return res.status(200).json({ users: usuarios })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno no servidor" })
    }
})

app.post('/cadastrar-usuario', async (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }

        await Usuario.create(usuario)
        return res.status(201).json({ mensagem: "Usuario cadastrado com sucesso!!" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno no servidor" })
    }
})

app.post('/login', async (req, res) => {
    try {
        let usuario = await Usuario.findOne({ email: req.body.email })
        console.log(usuario)
        return res.status(200).json({ message: "usuario encontrado" })
    } catch (error) {
        console.log("USuario nao encontrado")
        return res.status(500).json({ message: "Erro interno no servidor" })
    }

})


mongoose.connect(connectionString, {
    dbName: "BancoDeDados"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log("falha ao se conectar com o mongoDB")
    console.log(error)
})
