// const store = require('../../../store/mysql')
//DB MICROSERVICIO
const store = require('../../../store/remote-mysql')
const ctrl = require('./controller')

// Trabajar con el controlador como una función a la que le inyectamos el de forma automatica el almacenamiento
module.exports = ctrl(store)
