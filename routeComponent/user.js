const route = require('express').Router()    
const {register, login, logout} = require('../controller/userController')
const validate = require('../middleware/usermiddleware')

route.get('/api/register', validate, register)

route.get('/api/login', validate,login)

route.get('/api/logout', logout)


module.exports = route