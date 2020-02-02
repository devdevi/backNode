const auth = require('../../../auth')

module.exports = function checkAuth(action) {

function middleware(req, res, next){
switch (action) {
    case 'update':
        //
        const owner = req.body.id
        auth.check.on(req, owner)
        break
    default:
        next();
}
}
return middleware;
}
