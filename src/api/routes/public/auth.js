const core = require('../../core/auth');
const responseObject = require('../../../tools/response-object');

module.exports = (BASE, app) => {

    app.post(`${BASE}login`, async function (req, res, next) {

        const response = await core.login();

        return responseObject(res, response, req);
    });

    app.get(`${BASE}validate-token`, async function (req, res, next) {

        const response = await core.validateToken();

        return responseObject(res, response, req);
    });
}