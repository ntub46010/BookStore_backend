var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {	
	var userid = req.param('userid');
	var memberid = req.param('memberid');
    pub.sendQueryJSON(res, "exec 顯示對談商品清單 '" + userid + "', '" + memberid + "'");
});

module.exports = router;