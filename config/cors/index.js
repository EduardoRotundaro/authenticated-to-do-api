const cors = require('cors');

const CONFIG = {
    OPTIONS: {
        origin: '*',
        methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
}

module.exports = cors(CONFIG);