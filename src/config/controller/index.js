const express = require('express')

const auth = require('../../middlewares/auth')

let publicRoutes = express.Router()
require('../../components/auth/routes/public')(publicRoutes)
require('../../components/user/routes/public')(publicRoutes)

let protectedRoutes = express.Router()
require('../../components/user/routes/protected')(protectedRoutes)

module.exports = (api)=>{
    api.use('/', publicRoutes)
    api.use(auth)
    api.use('/protected', protectedRoutes)
}