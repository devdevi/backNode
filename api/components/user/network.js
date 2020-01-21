const express = require("express")

const response = require('../../../network/response')

const Controller = require('./index')

const router = express.Router();

router.get('/', function(req, res) {
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
});

router.get('/:id', function(req, res) {
    const user = Controller.get(req.params.id);
    response.success(req, res,  lista, 200)
    // res.send('Todo funciona')
})

module.exports = router;
