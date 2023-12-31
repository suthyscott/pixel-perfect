require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {sequelize} = require('./util/database')

const {PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())

const {User} = require('./models/user')
const {Phone} = require('./models/phone')
const {SavedPhone} = require('./models/savedPhone')
const {seedDatabase} = require('./util/seed')

const {register, login} = require('./controller/userCtrl')

User.hasMany(SavedPhone)
SavedPhone.belongsTo(User)

Phone.hasMany(SavedPhone)
SavedPhone.belongsTo(Phone)

// Auth endpoints
app.post('/api/register', register)
app.post('/api/login', login)


// sequelize.sync({force: true}).then(() => seedDatabase())
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Take us to warp ${PORT}!`))
    })
    .catch(err => console.log(err))