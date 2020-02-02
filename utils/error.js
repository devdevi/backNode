const e = require("express");

// utilidades que pertenecen a todo el proyecto
function err(message, code) {
    let e = new Error(message);
    if (code) {
        e.statusCode = code
    }
    return e;

}
module.exports = err;
