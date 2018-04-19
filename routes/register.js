var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var userid = req.param('userid');
	var pwd = req.param('pwd');
	var name = req.param('name');
	var email = req.param('email');
	var gender = req.param('gender');
	var dep = req.param('department');
    pub.sendQueryJSON(res, "exec 註冊 '" + userid + "', '" + pwd + "', '" + name + "', '" + email + "', '" + gender + "', '" + dep + "'");
});

module.exports = router;