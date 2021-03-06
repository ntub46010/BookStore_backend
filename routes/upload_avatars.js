var express = require('express');
var router = express.Router();
var  multer=require('multer');
var fileName;
var userId = "";

var storage = multer.diskStorage({
     //设置上传后文件路径，uploads文件夹会自动创建。
        destination: function (req, file, cb) {
            cb(null, './public/avatars')
       }, 
     //给上传文件重命名，获取添加后缀名
      filename: function (req, file, cb) {
		  console.log("userId in storage is " + userId);
          var fileFormat = (file.originalname).split(".");
		  if (userId == null || userId == "") {
			fileName = (file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
		  }else {			
			fileName = userId + "." + fileFormat[fileFormat.length - 1];
		  }
		
          cb(null, fileName);
      }
 });  
     //添加配置文件到muler对象。
     var upload = multer({
          storage: storage
    });
    
	//如需其他设置，请参考multer的limits,使用方法如下。
   //var upload = multer({
  //    storage: storage,
  //    limits:{}
  // });
  

/* GET home page. */
router.get('/', function(req, res){
	userId = req.param('userid');
    res.send(
        '<form action="/upload_avatar" method="post" enctype="multipart/form-data">'+
        '<input type="file" name="file">'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );
});

router.post('/', upload.single('file'), function(req, res, next){
	userId = req.param('userid');
    res.send(fileName);
});

module.exports = router;
