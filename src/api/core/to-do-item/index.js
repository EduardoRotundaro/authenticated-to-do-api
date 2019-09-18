const create = require('./create');
const deleteAll = require('./deleteAll');
const deleteOne = require('./deleteOne');
const getAll = require('./getAll');
const toggleDone = require('./toggleDone');
const updateDescription = require('./updateDescription');

module.exports = {
    create: async () => await create(),
    deleteAll: async () => await deleteAll(),
    deleteOne: async () => await deleteOne(),
    getAll: async () => await getAll(),
    toggleDone: async () => await toggleDone(),
    updateDescription: async () => await updateDescription()
}