const {User} = require('../models/user')
const bcrypt = require('bcryptjs')
const {SECRET} = process.env
const jwt = require('jsonwebtoken')

const createToken = (username, id) => {
    let token = jwt.sign({username, id}, SECRET,{expiresIn: '2 days'})
    return token
}

module.exports = {
    register: async (req, res) => {
        try {
            const {username, password} = req.body
            let foundUser = await User.findOne({where: {username}})

            if(foundUser){
                res.status(400).send("there is already a user with that username")
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })

                const token = createToken(newUser.username, newUser.id)
                const exp = Date.now() + 1000 * 60 * 60 * 48

                res.status(200).send({
                    username: newUser.username,
                    userId: newUser.id,
                    token,
                    exp
                })
            }

        } catch(err){
            console.log(err)
            res.status(500).send('Something went wrong while registering')
        }
    },
    login: async (req, res) => {
       try {
        const {username, password} = req.body

        const foundUser = await User.findOne({where: {username}})

        if(foundUser){
            const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

            if(isAuthenticated){
                const token = createToken(foundUser.username, foundUser.id)
                const exp = Date.now() + 1000 * 60 * 60 * 48

                res.status(200).send({
                    username: foundUser.username,
                    userId: foundUser.id,
                    token,
                    exp
                })
            } else {
                res.status(400).send('That password is incorrect')
            }
        } else {
            res.status(400).send('There is no user with that username in the database')
        }

       } catch(err){
        console.log(err)
        res.status(500).send("something went wrong with login")
       }
    }
}