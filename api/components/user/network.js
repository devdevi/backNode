const express = require("express")

const response = require('../../../network/response')

const controller = require('./controller')

const router = express.Router();

router.get('/', function(req, res) {
    console.log(controller)
    const lista = controller.list();
    response.success(req, res,  lista, 200)
    // res.send('Todo funciona')
})

module.exports = router;
