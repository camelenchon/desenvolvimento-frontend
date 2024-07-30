const http = require('http')
const port = 5000

const produtos = [
    { nome: 'bolo de morango', valor: 1000, imagem: 'https://cdn5.colorir.com/desenhos/color/201707/bolo-de-morango-comida-lacteos-e-sobremesas-pintado-por-sananamor-1340813.jpg' },
    { nome: 'bolo de chocolate', valor: 2000, imagem: 'https://img.freepik.com/vetores-premium/bolo-comida-sobremesa-doce-chocolate-creme-lanche-cozido-delicioso-acucar-fatia-saboroso-queijo_526280-357.jpg' }
]
const requestHandler = (req, res) => {
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.write(JSON.stringify(produtos))
    return res.end()
}
const server = http.createServer(requestHandler)


server.listen(port, () => {
    console.log('Servidor rodando na porta 5000')
})