var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var bookid = req.param('bookid');
	var full = req.param('full');
    pub.sendQueryJSON(res, "exec 顯示商品詳情 '" + bookid + "', '" + full + "'");
});

module.exports = router;