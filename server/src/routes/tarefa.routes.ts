import { Router } from "express"
import database from "../database"

const router = Router()

router.get("/", async (req, res) => {
  console.log("READED ITENS")
  const db = await database()
  const result = await db.all('SELECT * FROM todo')
  res.json(result)
})

router.get("/:id", async (req, res) => {
  console.log("READED ITEN")
  const db = await database()
  const result = await db.all('SELECT * FROM todo WHERE id=?', [req.params.id])
  res.json(result)
})

router.post("/", async (req, res) => {
  console.log("CREATED NEW ITEM")
  const db = await database()
  const result = await db.run('INSERT INTO todo(texto) VALUES(?)', [req.body.texto])
  res.json({ id: result.lastID })
})

router.put("/:id", async (req, res) => {
  console.log("UPDATE ITEM")
  const db = await database()
  const result = await db.run('UPDATE todo SET texto=?, done=? WHERE id=?', [req.body.texto, req.body.done, req.params.id])
  res.json({ id: req.params.id })
})

router.patch("/:id", async (req, res) => {
  console.log("UPDATE ITEM")
  const db = await database()
  let query = 'UPDATE todo SET '
  const values = []
  
  if (req.body.texto) {
    query += 'texto=?, '
    values.push(req.body.texto)
  }
  if (req.body.done !== undefined) {
    query += 'done=?, '
    values.push(req.body.done)
  }

  query = query.slice(0, -2)
  query += ' WHERE id=?'
  values.push(req.params.id)
  const result = await db.run(query, values)
  res.json({ id: req.params.id })
})


router.delete("/:id", async (req, res) => {
  console.log("UPDATE ITEM")
  const db = await database()
  const result = await db.run('DELETE FROM todo WHERE id=?', [req.params.id])
  res.json({ id: req.params.id })
})

export default router