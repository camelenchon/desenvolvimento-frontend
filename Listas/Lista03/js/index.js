const express = require('express')
const app = express()
const port = 5010

app.use(express.json())

let database = []

//ENDPOINT
app.post('/cadastrar-usuario', (req, res) => {
    let cadastro = {
        "nome": req.body.nome,
        "email": req.body.email,
        "senha": req.body.senha
    }


    try {
        let usuario = {
            nome: req.body.nome
        }
        let usuarioEmail = database.find(usuario => usuario.email == usuarioEmail)

        if (usuario == usuarioEmail) {
            return res.status(400).json({ message: "Email ja esta em uso" })
        }

        let usuarioSenha = database.find(usuario => usuario.senha == usuarioSenha)

        if (senha != usuarioSenha) {
            return res.status(400).json({ messagge: "As sennhas devem ser iguais" })
        }
        database.push(cadastro)


        return res.status(200).json({ message: "cadastro realizado com sucesso" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno no servidor" })
    }
})
//ENDPOINT
app.post('/login', (req, res) => {
    try {
        let login = {
            "email": req.body.email,
            "senha": req.body.senha
        }

        let emailDigitado = database.find(login => login.email == emailDigitado)
        if (!emailDigitado) {
            return res.status(400).json({ message: "Usuario ou senha invalido" })
        }

        let senhaDigitada = database.find(login => login.senha == senhaDigitada)

        if (!senhaDigitada) {
            return res.status(400).json({ message: "Usuario ou senha invalido" })
        }
        if (emailDigitado == email && senhaDigitada == senha) {
            return res.status(200).json({ message: "Login realizado com sucesso" })
        }

    } catch (error) {
        return res.status(500).json({ message: "Erro interno no servidor" })
    }


})
app.get('/buscar-todos-usuarios', (req, res) => {
    try {
        return res.status(200).json({ usuario: database })
    } catch (error) {
        return res.status(500).json({ mensagem: error })
    }
})

app.listen(port, () => {
    console.log('servidor executando')
})
console.log(`http://localhost:${port}`)