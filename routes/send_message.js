var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var userid = req.param('userid');
	var memberid = req.param('memberid');
	var bookid = req.param('bookid');
	var message = req.param('msg');
    pub.sendQueryJSON(res, "exec 送出訊息 '" + userid + "', '" + memberid + "', '" + bookid + "', '" + message + "'");
});

module.exports = router;