const express = require('express')
const path = require('path')

const app = express()

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.use('/standard', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.use('/amp', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'amp-index.html'))
})
let server = app.listen(3000, () => {
  console.log('Server listening on port 3000')
})