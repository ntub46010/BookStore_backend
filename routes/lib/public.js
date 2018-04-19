var sql = require('mssql');
var pool = require('./db.js');

exports.sendQueryJSON = function (res, mandate) {
	pool.connect().then(function() {		
		console.log('----------------------------\n' + new Date());
		var request = new sql.Request(pool);		
		request.query(mandate).then(function (result) {
			res.status(200).json(result.recordset);
			//res.status(200).json(result/*.recordset*/);
			pool.close();
		}).catch (function (err) { 
			console.error(err);
			res.status(500).send(err.message);
			pool.close();
		});
		//pool.close(); 不能寫在這，會connection not yet open
	}).catch(function (err) {
        console.log(err);
    });
};
