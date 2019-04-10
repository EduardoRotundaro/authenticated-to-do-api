const env_file = require('../../../.env')

const API_PORT = process.env.PORT || 4040

const API_SECRET = env_file.API_SECRET

const CRYPT_SECRET = env_file.CRYPTOR_SECRET

module.exports = {
    API_PORT,
    API_SECRET,
    CRYPT_SECRET
}