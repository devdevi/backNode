const express = require("express")

const response = require('../../../network/response')

const Controller = require('./index')

const router = express.Router();

// Separaremos las rutas de las funciones
// router.get('/', list);
// router.get('/:id', get);
router.post('/login', upsert);
// router.put('/', upsert);

function upsert(req, res) {
    const { username, password } = req.body
    Controller.login(username, password )
    .then(token => {
        response.success(req, res, token, 200)
    })
    .catch( e  => {
        response.error(req, res, 'invalid information', 400 );
    })
}

module.exports = router;
