const create = require('./create');
const getData = require('./getData');
const updateData = require('./updateData');

module.exports = {
    create: async () => await create(),
    getData: async () => await getData(),
    updateData: async () => await updateData()
}