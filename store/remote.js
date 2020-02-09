// hacer peticiones http mucho mas sencillas
const request = require('request')
// constructor
function createRemoteDB(host, port) {
    const URL = `http://${host}:${port}`

    function list(table) {
        return req('GET', table);
    }

    function get(table, id) {
        return req('GET', table, id);
    }

    function insert(table, data) {
        return req('POST', table, data);
    }

    function update(table, data) {
        return req('PUT', table, data);
    }

    function upsert(table, data) {
        if (data.id) {
            return update(table, data);
        }

        return insert(table, data);
    }

    function query(table, query, join) {
        console.log(table)
        return req('POST', table + '/query' , { query, join });
    }

    function req(method, table, data) {
        let url = `${URL}/${table}`;
        body = '';

        if (method === 'GET' && data) {
            url += '/' + data;
        } else if (data) {
            console.log(JSON.stringify(data))
            body = JSON.stringify(data);
        }

        return new Promise((resolve, reject) => {
            request({
                method,
                headers: {
                    'content-type': 'application/json'
                },
                url,
                body,
            }, (err, req, body) => {
                if (err) {
                    console.error('Error con la base de datos remota', err);
                    return reject(err.message);
                }

                const resp = JSON.parse(body);
                return resolve(resp.body);
            })
        })

    }


    return {
        list,
        get,
        upsert,
        query
    }
}
module.exports = createRemoteDB;



// const request = require('request');

// let urlRemote;

// function req(method, table, data = null) {
//     let url = `${urlRemote}/${table}`;
//     let body = '';

//     if(data && method === 'GET') {
//         url += `/${id}`;
//     } else if(data) {
//         body = JSON.stringify(data);
//     }

//     return new Promise((resolve, reject) => {
//         request({
//             url,
//             method,
//             body,
//             headers: {
//                 'content-type': 'application/json'
//             }
//         },(error, req, result) => {
//             if(error) {
//                 console.error('Error en la base de datos', error);
//                 return reject(error.message);
//             }

//             const res = JSON.parse(result);
//             return resolve(res.body);
//         });
//     });
// }

// function insert(table, data) {
//     return req('POST', table, data);
// }

// function update(table, data) {
//     return req('PUT', table, data);
// }

// module.exports = class RemoteStore {

//     constructor(host, port) {
//         urlRemote = `http://${host}:${port}`
//     }

//     list(table) {
//         return req('GET', table);
//     }

//     get(table, id) {
//         return req('GET', table, id);
//     }

//     upsert(table, data) {
//         if(data.id) {
//             return update(table, data);
//         }
//         return insert(table, data);
//     }
// }
