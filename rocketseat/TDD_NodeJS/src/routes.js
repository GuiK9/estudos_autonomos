const routes = require('express').Router()
const { User } = require("./app/models")

User.create({name: 'Guilherme', email: 'guilherme@gmail.com', password_hash: 'ksdmfkosmdofm5345'})


module.exports = routes