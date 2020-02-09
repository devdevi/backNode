// db
// const store = require('../../../store/mysql')
//DB MICROSERVICIO
const store = require('../../../store/remote-mysql')
const controller = require('./controller')

// permite hacer la explanation de los controladores
module.exports = controller(store);
