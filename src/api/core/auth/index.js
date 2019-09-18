const login = require('./login');
const validateToken = require('./validateToken');

module.exports = {
    login: async () => await login(),
    validateToken: async () => await validateToken()
}