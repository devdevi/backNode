// aquí vamos a  guardar todo el almacenamiento
const db = {
    'user': [
        { id: 1, name: 'Visaka' }
    ]
};

function list(table) {
    return db[table]
};

// Aislar el código de la base de datos
function get(table, id) {
    let collection = list(tabla)
    return collection.filter(item => item.id === id[0] || null)
};
function upsert(table, data) {
    db[collection].push(data)
};
function remove(table, id) {
    return true
};

module.exports = {
    list,
    get,
    upsert,
    remove,
}
