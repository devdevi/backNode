// jwt
const jwt = require('jsonwebtoken');

const config = require('../config.js')

const error = require('../utils/error')

const secret = config.jwt.secret;

function sign(data) {
    let output = JSON.parse(JSON.stringify(data))
    return jwt.sign(output, secret);
}

function verify(token) {
    return jwt.verify(token, secret)
}

const check = {
    own: function (req, owner) {
        //
       const decoded = decodeHeader(req);
       console.log(decoded)
       // Comprobar si es o no propio
    if ( decoded.id !== owner) {
        throw error('No puedes hacer esto', 401);

        // throw new Error('No puedes hacer esto');
    }

    },
    logged: function (req, owner) {
       const decoded = decodeHeader(req);

    }
}
function getToken(auth) {
    //Bearer TOKEN
    if (!auth) {
        throw error('No viene un token', 401);
        // throw new Error('No viene un token');
    }
    if (auth.indexOf('Bearer ') === -1) {
        // throw new Error('Formato Invalido');
        throw error('Formato Invalido', 401);
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
