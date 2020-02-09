module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret:  process.env.JWT_SECRET || 'SECRETO'
    },
    mysql: {
        host:  process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'SlV3aHxH16',
        password: process.env.MYSQL_PASS || 'rQsew14gW2',
        database: process.env.MYSQL_DB || 'SlV3aHxH16',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
}
