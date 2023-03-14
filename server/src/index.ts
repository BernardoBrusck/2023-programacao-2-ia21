import express from "express"

const app = express()
const PORT = 8080

app.get("/tarefa", (req, res) => res.send("# Buscar dados de todas as tarefa"))
app.get("/tarefa/:id", (req, res) => res.send("# Buscar dados de uma tarefa"))
app.post("/tarefa/:id", (req, res) => res.send("# Inserir uma tarefa"))
app.put("/tarefa/:id", (req, res) => res.send("# Alterar todos os dados de uma tarefa"))
app.patch("/tarefa/:id", (req, res) => res.send("# Alterar dados especificos de uma tarefa"))
app.delete("/tarefa/:id", (req, res) => res.send("# Excluir tarefa"))


app.get("/", (req, res) => res.send("Hello Word"))

app.listen(PORT, () => console.log(`RUNNING ${PORT}`))