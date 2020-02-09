const express = require('express');

// nos permite trabajar con toda la data en json
const  bodyParser = require('body-parser');

// swagger
const swaggerUi = require('swagger-ui-express');
const config = require('../config.js');

// components
const auth = require('./components/auth/network');
const user = require('./components/user/network');
// const post = require('./components/post/network');

const errors = require('../network/errors');

const app = express()

//  Documento swagger
const swaggerDoc = require('./swagger.json')
// BodyParser
app.use(bodyParser.json());
// ROUTER
app.use('/api/auth', auth);
// app.use('/api/post', post);
app.use('/api/user', user);



// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//  errors
app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api esuchando en el puerto', config.api.port)
});
