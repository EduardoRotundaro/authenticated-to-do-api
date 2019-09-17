const API_PORT = process.env.PORT || 4040;

module.exports = (app) => app.listen(API_PORT, (err) => {
    if(err){
        console.log('\x1b[31m%s\x1b[0m', `□ Could not start the application...`);
        console.log('\x1b[31m%s\x1b[0m', `□ ${err.message}`);
    }
    else console.log('\x1b[36m%s\x1b[0m', `■ Server is running on port ${API.API_PORT}...`);
});