const login = require('./login')
const validateToken = require('./validateToken')

module.exports = {
    login: async (data)=>{
        return await login(data)
    },
    validateToken: async (data)=>{
        return await validateToken(data)
    },
}
