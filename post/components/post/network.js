const express = require("express")

// Middlewarte
const secure = require('./secure')

const response = require('../../../network/response')
const Controller = require('./index')
const router = express.Router();

// Separaremos las rutas de las funciones
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/',secure('update'), upsert);
router.get('/user/:userId', getByUser);

// Internal Functions
function list (req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res,  lista, 200)
        })
        .catch(next);
};

function get (req, res, next) {
    Controller.get(req.params.id)
    .then((post) => {
        response.success(req, res,  post, 200)
    })
    .catch(next);
};

function upsert(req, res, next) {
    Controller.upsert(req.body)
    .then((post) => {
        response.success(req, res,  post, 201)
    })
    .catch(next);
};
function getByUser(req, res, next){
    Controller.getBy(req.params.userId)
        .then(data => response.success(req, res, data, 200))
        .catch(next);
}

module.exports = router;
