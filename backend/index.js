#!/usr/bin/env node

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) =>
  res.json({message: 'Hello From API'})
)

app.get('/error', (req, res) => {
  throw new Error('You pawned')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
