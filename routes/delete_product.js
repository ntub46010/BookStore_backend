var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var bookid = req.param('bookid');
    pub.sendQueryJSON(res, "exec 刪除商品 '" + bookid + "'");
});

module.exports = router;