const nanoid = require('nanoid');
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
    function upsert(data) {
        const post = {
			id: data.id,
			user: data.user,
			text: data.text,
		}

		if (!post.id) {
			post.id = nanoid();
		}
        return store.upsert(TABLA, post)
    }

    function getBy(user) {
        console.log(user)
        return store.query(TABLA, user )
    }

    return {
        list,
        get,
        upsert,
        getBy,
    }
}
