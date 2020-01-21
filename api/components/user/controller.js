const store = require('../../../store/dummy')

const TABLA = 'user';

// function list() {
//     return store.list(TABLA)
// }

module.exports = function (injectedStore) {
    // let store = injectdStore;
    // if (!store) {
    //     store = require('../../../store/dummy')
    // }
    if (!injectedStore) injectedStore = require("../../../store/dummy");

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

    function list() {
        return injectedStore.list(TABLA)
    }
    return {
        list
    }
}
// module.exports = {
//     list
// };
