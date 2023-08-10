const express = require('express')
const app = express()
const routes = require('./routes/routes')
const Port = process.env.PORT || 3000

app.use('/', routes)

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})