const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'jwagicgk',
    password: '9dkNX4FaZTp9FaypHqAjktVntKTQR3Y2',
    host: 'manny.db.elephantsql.com',
    port: 5432,
    database: 'jwagicgk'
})

module.exports = pool;

