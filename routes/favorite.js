var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var memberid = req.param('memberid');
    pub.sendQueryJSON(res, "exec 列示我的最愛 '" + memberid + "'");
});

module.exports = router;