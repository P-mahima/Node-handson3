const register = (request, response) => {
 response.send('Register page')
}
const login = (request, response) => {
 response.send([
    {name: "mahima"},
    {name: "falguni"}
 ])
}
const logout = (request, response) => {
 response.send('logout page')
}
module.exports = {register, login, logout}