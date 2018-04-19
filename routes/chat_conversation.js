var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var userid = req.param('userid');
	var memberid = req.param('memberid');
	var bookid = req.param('bookid');
    pub.sendQueryJSON(res, "exec 顯示交談 '" + userid + "', '" + memberid + "', '" + bookid + "'");
});

module.exports = router;