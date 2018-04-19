var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var memberid = req.param('memberid');
    pub.sendQueryJSON(res, "exec 顯示會員檔案 '" + memberid + "'");
});

//GET請求
router.get('/', function(req, res) {
	var memberid = req.param('memberid');
    pub.sendQueryJSON(res, "exec 顯示會員檔案 '" + memberid + "'");
});

module.exports = router;