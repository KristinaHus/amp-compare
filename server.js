const express = require('express')
const path = require('path')

const app = express()

app.get('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/standard', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.use('/amp', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'amp-index.html'))
})
let server = app.listen(process.env.PORT || 5000, () => {
  console.log('Server listening on port 5000')
})