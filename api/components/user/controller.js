const store = require('../../../store/dummy')

const TABLA = 'user';

// function list() {
//     return store.list(TABLA)
// }

module.exports = function(injectdStore) {
    let store = injectdStore;
    if (!store) {
        store = require('../../../store/dummy')
    }
    function list() {
        return store.list(TABLA)
    }
    return {
        list
    }
}
// module.exports = {
//     list
// };
