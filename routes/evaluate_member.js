var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var userid = req.param('userid');
	var memberid = req.param('memberid');
	var value = req.param('value');
    pub.sendQueryJSON(res, "exec 評價會員 '" + userid + "', '" + memberid + "', '" + value + "'");
});

module.exports = router;