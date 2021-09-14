const express = require('express')
const morgan = require('morgan')
const app = express();
const port = 3000
app.use(morgan('combined'))
 
app.get('/', function (req, res) {
  res.send('Hello World 12123213')
})
 
app.listen(port)