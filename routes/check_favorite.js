var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var userid = req.param('userid');
	var bookid = req.param('bookid');
    pub.sendQueryJSON(res, "exec 檢查是否喜歡商品 '" + userid + "', '" + bookid + "'");
});

module.exports = router;