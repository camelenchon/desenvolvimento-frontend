const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
})

const usuario = mongoose.model('usuarios', usuarioSchema)
module.exports = usuario


