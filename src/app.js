import express from "express"

import 'dotenv/config'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("API funcionando")
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})