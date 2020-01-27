
const TABLA = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy')
    }
    // function list() {
    //     return store.list(TABLA)
    // }
    // function get(id) {
    //     return store.get(TABLA, id)
    // }
    function upsert(data) {
        const  { id, username, password } = data
        const authData = {
           id
        }
        // si viene un id lo usaremos, en caso contrario lo generaremos
        if (username) {
            authData.username = username;
        }
        if (password) {
            authData.password = password;
        }
        return store.upsert(TABLA, authData)
    }
    return {
        upsert,
    }
}
