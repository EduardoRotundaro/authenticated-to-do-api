const statusEnum = require('../../constants/enumerators/response-status')

module.exports = (resObj, status, data, err)=>{

    resObj.status(status)
    
    return resObj.json({
        status: statusEnum(status),
        data: data,
        err: err
    })
}