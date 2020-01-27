const store = require('../../../store/dummy');
const ctrl = require('./controller')

// Trabajar con el controlador como una función a la que le inyectamos el de forma automatica el almacenamiento
module.exports = ctrl(store)
