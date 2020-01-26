const express = require("express")

const response = require('../../../network/response')

const Controller = require('./index')

const router = express.Router();

// Separaremos las rutas de las funciones
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);



// Internal Functions
function list (req, res) {
    console.log(Controller)
    //  async
    // const lista = Controller.list()
    Controller.list()
        .then((lista) => {
            response.success(req, res,  lista, 200)
        })
        .catch((error) => {
            response.error(req, res,  error.message, 500)
        });
    // response.success(req, res,  lista, 200)
    // res.send('Todo funciona')
};

function get (req, res) {
    Controller.get(req.params.id)
    .then((user) => {
        response.success(req, res,  user, 200)
    })
    .catch((err) => {
        response.error(req, res, err.message, 500)
    })
    ;
    // response.success(req, res,  lista, 200)
    // res.send('Todo funciona')
};

function upsert(req, res) {
    Controller.upsert(req.body)
    .then((user) => {
        response.success(req, res,  user, 201)
    })
    .catch((err) => {
        response.error(req, res, err.message, 500)
    })
};

module.exports = router;
