const core = require('../../core/user');
const responseObject = require('../../../tools/response-object');

module.exports = (BASE, app) => {

    app.post(`${BASE}new-account`, async function (req, res, next) {

        const response = await core.create();

        return responseObject(res, response, req);
    });
}