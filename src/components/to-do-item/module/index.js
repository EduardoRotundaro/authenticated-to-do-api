const create = require('./create')
const get = require('./get')
const update = require('./update')
const remove = require('./remove')

module.exports = {
    create: async ()=>{
        return await create()
    },
    get: async ()=>{
        return await get()
    },
    update: async ()=>{
        return await update()
    },
    remove: async ()=>{
        return await remove()
    }
}