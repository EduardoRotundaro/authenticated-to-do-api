const crypto = require('crypto')

const KEY = require('../../config/api').CRYPT_SECRET

let encrypt = (str) => {
    const cipher = crypto.createCipher('aes-128-cbc', KEY)
    return cipher.update(str, 'utf8', 'hex') + cipher.final('hex')
}

let decrypt = (str) => {
    const decipher = crypto.createDecipher('aes-128-cbc', KEY)
    return decipher.update(str, 'hex', 'utf8') + decipher.final('utf8')
}

let compare = (srtEnc, strDec) =>{
    return ( encrypt(strDec) === srtEnc )
}

module.exports = {
    encrypt,
    decrypt,
    compare
}