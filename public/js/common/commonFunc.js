module.exports = function (state,data,message,errorCode) {
    return {
        state,
        data,
        message,
        errorCode: errorCode ? errorCode : null
    }
}