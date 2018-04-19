var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var userid = req.param('userid');
	var pwd = req.param('pwd');
    pub.sendQueryJSON(res, "exec 登入 '" + userid + "', '" + pwd + "'");
});

module.exports = router;