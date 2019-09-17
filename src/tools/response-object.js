const statusEnum = require('../constants/enumerators/response-status');

module.exports = (res, status, data, err, query) => {
    res.status(status);
    
    /*-------- Resposta como html --------*/
    if(data && data.html) return res.send(data.html);

    /*-------- Resposta padrão --------*/
    return res.json({
        status: statusEnum(status),
        data: data,
        err: err
    });
}