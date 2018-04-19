var express = require('express');
var router = express.Router();
var pub = require('./lib/public.js');

//POST請求
router.post('/', function(req, res) {
	var bookid = req.param('bookid');
	var title = req.param('title');
	var type = req.param('type');
	var condition = req.param('condition');
	var note = req.param('note');
	var price = req.param('price');
	var ps = req.param('ps');
	var photo = req.param('photo');
	var photo2 = req.param('photo2');
	var photo3 = req.param('photo3');
	var photo4 = req.param('photo4');
	var photo5 = req.param('photo5');
    pub.sendQueryJSON(res, "exec 編輯書籍 '" + bookid + "', '" + title + "', '" + type + "', '" + condition + "', '" + note + "', '" + price + "', '" + ps + "', '"
					+ photo + "', '" + photo2 + "', '" + photo3 + "', '" + photo4 + "', '" + photo5 + "'");
});

module.exports = router;