const jwt = require('jsonwebtoken')

const API_KEY = require('../../config/api').API_SECRET

let testToken = async (token)=>{
    try {
        await jwt.verify( token, API_KEY)

        return {
            status: true
        }
    
    } catch (error) {
        return { 
            err: error.message 
        }
    }
}

let createToken = (payload) =>{
    return jwt.sign( payload, API_KEY, { expiresIn: "1 days" } )
}

module.exports = {
    testToken,
    createToken
}