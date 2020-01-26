// const store = require('../../../store/dummy')

// Libreria para generar ids
const nanoid = require('nanoid');

const TABLA = 'user';

// function list() {
//     return store.list(TABLA)
// }

// usamos el controlador como un constructor al cual le pasaremos la base de datos 
module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy')
    }
    // if (!injectedStore) injectedStore = require("../../../store/dummy");

    // function list() {
    //     return injectedStore.list(TABLA)
    // }
    // return {
    //     list
    // }

    // convertimos en funciones asyncronas,
    //  Podemos hacer esto de dos maneras,
    // 1 Definiendo como función async
    // 2 o hacer que el list dentro del store sea async , devolviendo una promesa o haciendo async

    // convertimos la funcines en funciones async
    // devolver promesa o volverlas asynv
    function list() {
        return store.list(TABLA)
    }
    function get(id) {
        return store.get(TABLA, id)
    }
    function upsert(body) {
        const user = {
            name: body.name
        }
        // si viene un id lo usaremos, en caso contrario lo generaremos
        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }
        return store.upsert(TABLA.user)
    }
    return {
        list,
        get,
        upsert,
    }
}
// module.exports = {
//     list
// };
