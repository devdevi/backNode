// db
// const store = require('../../../store/mysql')
let store;
//DB MICROSERVICIO
const config = require('../../../config')
if (config.remoteDB === true) {
    let store = require('../../../store/remote-mysql')
} else {
    let store = require('../../../store/mysql')
}

const controller = require('./controller')

// permite hacer la explanation de los controladores
module.exports = controller(store);
