module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    jwt: {
        secret:  process.env.JWT_SECRET || 'SECRETO'
    },
    mysql: {
        host:  process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'SlV3aHxH16',
        password: process.env.MYSQL_PASS || 'nCEJEoUXjl',
        database: process.env.MYSQL_DB || 'SlV3aHxH16',
    }
}
