// db
const store = require('../../../store/dummy')

const controller = require('./controller')

// permite hacer la explanation de los controladores
module.exports = controller(store);
