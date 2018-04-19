var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var type = req.param('type');
	var keyword = req.param('keyword');
    pub.sendQueryJSON(res, "exec 列示商品 '" + type + "', '" + keyword + "'");
});

module.exports = router;