var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var memberid = req.param('memberid');
    pub.sendQueryJSON(res, "exec 預覽信箱 '" + memberid + "'");
});

module.exports = router;