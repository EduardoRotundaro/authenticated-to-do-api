const core = require('../../core/user');
const responseObject = require('../../../tools/response-object');

module.exports = (BASE, app) => {

    app.get(`${BASE}:id`, async function (req, res, next) {

        const response = await core.getData();

        return responseObject(res, response, req);
    });

    app.patch(`${BASE}:id`, async function (req, res, next) {

        const response = await core.updateData();

        return responseObject(res, response, req);
    });
}