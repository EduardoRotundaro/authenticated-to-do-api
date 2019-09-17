module.exports = {
    isNumber: (n) => (!isNaN(parseFloat(n)) && isFinite(n) ),
    isEmpty: (data) => {
        if(!data) return true; // null, undefined, 0, false, ''
        if(Array.isArray(data) && !data.length) return true; // []
        if( (typeof data) === 'string' && !(data.trim())) return true; // '   '
        if( (typeof data) === 'string' && (data === '{}' || data === '[]') ) return true; // '[]', '{}'
        if( (typeof data) === 'object' && (JSON.stringify(data)) === '{}' ) return true; // {}
        return false;
    }
}