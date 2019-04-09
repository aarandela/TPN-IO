const express = require('express')
const compress = require('compression')
const path = require('path')
const bodyParser = require('body-parser')

// heroku
// const sslRedirect = require('heroku-ssl-redirect');

const app = express()

// heroku
// app.use(sslRedirect());

const buildPath = path.join(__dirname, '..', 'build')

app.use(express.static(buildPath))
app.use(compress())

app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))

// frontend entry
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`)
})
