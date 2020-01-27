// jwt
const jwt = require('jsonwebtoken');


function sign(data) {
    // jwt
   return jwt.sign(data, 'secreto');
}
module.exports  = {
    sign,
}
