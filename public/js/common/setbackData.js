let timestamp = require('./creatTimestamp.js')();
module.exports = function (state,body,message,errorCode) {
    return {
        state,
        body,
        message,
        errorCode: errorCode ? errorCode : null,
        lsh: 'lsh' + require('./creatTimestamp.js')()
    }
}