
//routing level middleware

const validate = ( request, response, next ) => {
    console.log('specific level middleware')
    next()
}
module.exports = validate


