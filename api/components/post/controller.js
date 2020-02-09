const TABLA = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy')
    }
    function list() {
        return store.list(TABLA)
    }
    function get(id) {
        return store.get(TABLA, id)
    }
    function upsert({id = null, user, text, newPost }) {
        const post = {
            text,
            id,
            user,
            newPost
        }
        console.log(post)
        return store.upsert(TABLA, post)
    }

    function getBy(user) {
        return store.query(TABLA, {user})
    }

    return {
        list,
        get,
        upsert,
        getBy,
    }
}
