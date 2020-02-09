
const express = require("express")

const response = require('../network/response')
const store = require('../store/mysql')

const router = express.Router();

// Separaremos las rutas de las funciones
router.get('/:table', list);
router.get('/:table/:id', get);
router.post('/:table', insert);
router.post('/:table', upsert);
// router.put('/',secure('update'), upsert);
// router.get('/user/:userId', getByUser);

// Internal Functions
async function list (req, res, next) {
    const datos = await store.list(req.params.table)
    response.success(req, res,  datos, 200)
    // return datos;
};

async function get (req, res, next) {
    const datos = await store.get(req.params.table, req.params.id)
    response.success(req, res,  datos, 200)
    // return datos;
};

async function  insert(req, res, next) {
    const datos = await store.insert(req.params.table, req.body)
    response.success(req, res,  datos, 200)

}
async function upsert(req, res, next) {
    const datos = await store.upsert(req.params.table)
    response.success(req, res,  datos, 200)
}
// function upsert(req, res, next) {
//     Controller.upsert(req.body)
//     .then((post) => {
//         response.success(req, res,  post, 201)
//     })
//     .catch(next);
// };
// function getByUser(req, res, next){
//     Controller.getBy(req.params.userId)
//         .then(data => response.success(req, res, data, 200))
//         .catch(next);
// }

module.exports = router;
