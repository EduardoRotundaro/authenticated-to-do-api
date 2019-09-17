const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/authToDos';

const DB_SETTINGS = {
    useNewUrlParser: true
}

module.exports = () => mongoose.connect(DB_URL, DB_SETTINGS, (err) => {
    if(err){
        console.log('\x1b[31m%s\x1b[0m', `□ Could not connect to database: ${DB_URL}`);
        console.log('\x1b[31m%s\x1b[0m', `□ ${err.message}`);
    }
    else console.log('\x1b[36m%s\x1b[0m', `■ Server connected to database: ${DB_URL}`);
});