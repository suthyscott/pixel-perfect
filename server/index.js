require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())


app.listen(PORT, () => console.log(`Take us to warp ${PORT}!`))