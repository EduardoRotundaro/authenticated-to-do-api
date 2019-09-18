const core = require('../../core/to-do-item');
const responseObject = require('../../../tools/response-object');

module.exports = (BASE, app) => {

    app.post(`${BASE}:user`, async function (req, res, next) {

        const response = await core.create();

        return responseObject(res, response, req);
    });

    app.delete(`${BASE}all`, async function (req, res, next) {

        const response = await core.deleteAll();

        return responseObject(res, response, req);
    });

    app.delete(`${BASE}:id`, async function (req, res, next) {

        const response = await core.deleteOne();

        return responseObject(res, response, req);
    });

    app.get(`${BASE}all`, async function (req, res, next) {

        const response = await core.getAll();

        return responseObject(res, response, req);
    });

    app.patch(`${BASE}toggle-done/:id`, async function (req, res, next) {

        const response = await core.toggleDone();

        return responseObject(res, response, req);
    });

    app.get(`${BASE}update-description/:id`, async function (req, res, next) {

        const response = await core.updateDescription();

        return responseObject(res, response, req);
    });
}