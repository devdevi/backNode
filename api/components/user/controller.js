// const store = require('../../../store/dummy')

// Libreria para generar ids
const nanoid = require('nanoid');

 // auth
 const auth = require('../auth/index')

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
    async function upsert(body) {
        const { username, name, id, password } = body

        const user = {
            name,
            username,
        }
        // si viene un id lo usaremos, en caso contrario lo generaremos
        if (id) {
            user.id = id;
        } else {
            user.id = nanoid();
        }
        if (password || username) {
            const  { username, id } = user
            await auth.upsert({
                id,
                username,
                password: password
            })
        }
        return store.upsert(TABLA, user)
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
