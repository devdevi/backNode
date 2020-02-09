const express = require('express');

// nos permite trabajar con toda la data en json
const  bodyParser = require('body-parser');

// swagger
// const swaggerUi = require('swagger-ui-express');
const config = require('../config.js');

// components

const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express()

//  Documento swagger
// const swaggerDoc = require('./swagger.json')
// BodyParser
app.use(bodyParser.json());
// ROUTER
app.use('/api/post', post);

//  errors
app.use(errors);

app.listen(config.post.port, () => {
    console.log('Micro servicio post escuchando en el puerto', config.post.port)
});
