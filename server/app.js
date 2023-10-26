require('dotenv').config()
const express = require('express')
const path = require('path')
const serverConfig = require('./config/serverConfig')

const app = express()

const {PORT} = process.env || 7777
serverConfig(app)
const indexRoute = require('./routes/index.routes')

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/', indexRoute)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})
app.listen(PORT, () => console.log(`Наша гениальная игра запущена на ${PORT}  порту`))
