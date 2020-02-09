const express = require("express")

// Middlewarte
const secure = require('./secure')

const response = require('../../../network/response')

const Controller = require('./index')


const router = express.Router();

// Separaremos las rutas de las funciones
router.get('/', list);

// following
router.post('/follow/:id', secure('follow'), follow);
router.get('/:id/following', following);

router.get('/:id', get);
router.post('/', upsert);
router.put('/',secure('update'), upsert);



// Internal Functions
function list (req, res, next) {
    // console.log(Controller)
    //  async
    // const lista = Controller.list()
    Controller.list()
        .then((lista) => {
            response.success(req, res,  lista, 200)
        })
        .catch(next);
        // .catch((error) => {
        //     response.error(req, res,  error.message, 500)
        // });
    // response.success(req, res,  lista, 200)
    // res.send('Todo funciona')
};

function get (req, res, next) {
    Controller.get(req.params.id)
    .then((user) => {
        response.success(req, res,  user, 200)
    })
    .catch(next);
    // .catch((err) => {
    //     response.error(req, res, err.message, 500)
    // })
    // ;
    // response.success(req, res,  lista, 200)
    // res.send('Todo funciona')
};

function upsert(req, res, next) {
    Controller.upsert(req.body)
    .then((user) => {
        response.success(req, res,  user, 201)
    })
    .catch(next);
    // .catch((err) => {
    //     response.error(req, res, err.message, 500)
    // })
};
function follow(req, res, next) {
    return Controller.follow(req.user.id, req.params.id)
        .then(data => response.success(req, res, data, 201))
        .catch(next)
}

function following(req, res, next) {
    return Controller.following(req.params.id)
        .then(data => response.success(req, res, data, 201))
        .catch(next)
}

module.exports = router;
