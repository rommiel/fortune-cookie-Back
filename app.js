const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require("body-parser");


var cookie = require('./routes/cookie');

app.use(cors())
app.use(bodyParser.json());

app.use('/cookie', cookie)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))