const express = require("express")
const app = express()
const port = 3000

//criar uma função
//rota principal
app.get('/',  (req, res) => {
    res.send("Bem vindo ao meu site de Alimentos")
})

//executando servidor 
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})