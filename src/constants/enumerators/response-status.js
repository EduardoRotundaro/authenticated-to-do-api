module.exports = (code) => {
    switch (code) {
        case 200:
            return { code: 200, message: 'Ok' }
        case 201:
            return { code: 201, message: 'Created' }
        case 204:
            return { code: 204, message: 'No Content' }
        case 400:
            return { code: 400, message: 'Bad Request' }
        case 401:
            return { code: 401, message: 'Unauthorized' }
        case 403:
            return { code: 403, message: 'Forbidden' }
        case 404:
            return { code: 404, message: 'Not Found' }
        case 405:
            return { code: 405, message: 'Method Not Allowed' }
        case 408:
            return { code: 408, message: 'Request Timeout' }
        case 410:
            return { code: 410, message: 'Gone' }
        case 500:
            return { code: 500, message: 'Internal Server Error' }
        case 501:
            return { code: 501, message: 'Not Implemented' }
        case 503:
            return { code: 503, message: 'Service Unavailable' }
        default:
            return { code: 0, message: 'Unknown' }
    }
}