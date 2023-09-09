const product = require('express').Router()



product.get('/api/productone' , (request, response) => {
    response.send('product route 1')
})
product.get('/api/producttwo' , (request, response) => {
    response.send('product route 2')
})
product.get('/api/productthree' ,(request, response)=>{
    response.send('product route 3')
})


module.exports = product