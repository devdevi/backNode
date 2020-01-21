// Tenemos todas las respuestas desde el mismo archivo

exports.success = function(req, res, message, status) {
    res.status(status).send({
        error: false,
        status,
        body: message,
    })
}
exports.error = function(req, res, status) {
    res.status(status).send({
        error: true,
        status,
        body: MessageChannel,
    })
}
