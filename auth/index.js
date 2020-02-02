// jwt
const jwt = require('jsonwebtoken');

const config = require('../config.js')

const secret = config.jwt.secret;

function sign(data) {
    // jwt
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret)
}

const check = {
    own: function (req, owner) {
        //
       const decoded = decodeHeader(req);
       // Comprobar si es o no propio
    if ( decoded.id !== owner) {
        throw new Error('No puedes hacer esto');
    }

    }
}
function getToken(auth) {
    //Bearer TOKEN
    if (!auth) {
        throw new Error('No viene un token');
    }
    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato Invalido');
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

// decodificar token
function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token)
    req.user = decoded
    return decoded
}
module.exports = {
    sign,
    check,
}
