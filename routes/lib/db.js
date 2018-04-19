var sql = require('mssql');

var pool = new sql.ConnectionPool({
		user: 'root',
        password: '12345678',
        server: '127.0.0.1', 
        database: 'used_book_application'});
		
module.exports = pool;