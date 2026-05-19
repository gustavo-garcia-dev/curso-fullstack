const express = require("express")
const app = express()
const port = 3000

//middleware
app.use(express.static('public'))

//variavel com os dados 
const alimentos = [
    {id: 1, nome: "feijão", preco: 10},
    {id: 2, nome: "carne", preco: 50},
    {id: 3, nome: "frutas", preco: 70},
    {id: 4, nome: "sopas", preco: 40}
];

const tiposPratos = [
    {id: 1, nome: "strogonoff", preco: 40},
    {id: 2, nome: "lasanha", preco: 30},
    {id: 3, nome: "frango chadrez", preco: 25},
    {id: 4, nome: "feijão com farinha", preco: 60}
]

console.log(alimentos)

//criar uma função
//rota principal
app.get('/',  (req, res) => {
    res.send("Bem vindo ao meu site de Alimentos")
})

//produto
app.get('/produtos', (req, res) => {
    res.send(alimentos);
})

//tipos de pratos
app.get('/cardapio', (req, res) => {
    res.send(tiposPratos)
})

//Rota home]
app.get('/home', (req, res) => {
    //console.log("ola", __dirname)
    res.sendFile(__dirname + '/public/index.html')
})

//executando servidor 
app.listen(port, () => {
    console.log(`Servidor do projeto, rodando em http://localhost:${port}`)
})