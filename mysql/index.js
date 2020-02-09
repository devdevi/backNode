const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');

const app = express();
const router = require('./network')

app.use(bodyParser.json());


// rutas
app.use('/', router)

app.listen(config.mysqlService.port, () => {
    console.log('Servicio mysql esuchando en el puerto', config.mysqlService.port)
})
