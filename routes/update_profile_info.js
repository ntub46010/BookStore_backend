var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var memberid = req.param('memberid');
	var name = req.param('name');
	var department = req.param('department');
	var email = req.param('email');
	var avatar = req.param('avatar');
	var pwd = req.param('pwd');
    pub.sendQueryJSON(res, "exec 編輯會員檔案 '" + memberid + "', '" + name + "', '" + department + "', '" + email + "', '" + avatar + "', '" + pwd + "'");
});

module.exports = router;