const express = require('express');

// nos permite trabajr con toda la data en json
const  bodyParser = require('body-parser')
const config = require('../config.js')

const user = require('./components/user/network.js')

const app = express()


// BodyParser
app.use(bodyParser).json();
// ROUTER
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('Api esuchando en el puerto', config.api.port)
});
