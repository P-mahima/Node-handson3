const express =require('express')
const user = require('./routeComponent/user')
const product = require('./routeComponent/product')

const app = express()


// Application level middleware can be used like this

const applicationMiddleware = (request , response,next) => {
    console.log('Application MiddleWare')
    // response.send('Application Middleware')
    next()
}
app.use(applicationMiddleware) 

//----------------------------------------------------------------------------
app.use('/user', user)
app.use('/product' , product)

app.listen(3000, ()=>{
    console.log('Server is live in port 3000')
})