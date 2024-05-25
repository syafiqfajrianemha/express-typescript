import express from 'express'

const app = express()
const PORT = 4000

// CREATE
app.post('/users', (req, res, next) => {
  res.status(201).json({
    message: 'User created'
  })
})

// READ
app.get('/users', (req, res) => {
  res.json({
    message: 'User lists'
  })
})

// UPDATE
app.patch('/users/:id', (req, res) => {
  const {id} = req.params

  res.json({
    message: `User ${id} updated`
  })
})

// DELETE
app.delete('/users/:id', (req, res) => {
  const {id} = req.params

  res.json({
    message: `User ${id} deleted`
  })
})

app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`)
})