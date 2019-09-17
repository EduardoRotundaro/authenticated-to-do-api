const express = require('express');

const auth = require('../src/middlewares/auth');
const reqLogger = require('../src/middlewares/request-logger');

let publicRoutes = express.Router();
require('../src/api/routes/public/auth')('/', publicRoutes);
require('../src/api/routes/public/user')('/user/', publicRoutes);

let protectedRoutes = express.Router();
require('../src/api/routes/private/user')('/user/', protectedRoutes);
require('../src/api/routes/private/to-do')('/to-do/', protectedRoutes);

module.exports = (api) => {
    if(!global.PRODUCTION) api.use(reqLogger);
    api.use('/', publicRoutes);
    api.use(auth);
    api.use('/protected', protectedRoutes);
}