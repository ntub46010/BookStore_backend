var express = require('express');
var router = express.Router();
var  multer=require('multer');
var fileName;

 var storage = multer.diskStorage({
     //设置上传后文件路径，uploads文件夹会自动创建。
        destination: function (req, file, cb) {
            cb(null, './public/images')
       }, 
     //给上传文件重命名，获取添加后缀名
      filename: function (req, file, cb) {
          var fileFormat = (file.originalname).split(".");
		  fileName = (file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
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
    res.send(
        '<form action="/upload_images" method="post" enctype="multipart/form-data">'+
        '<input type="file" name="file">'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );
});

router.post('/', upload.single('file'), function(req, res, next){
    res.send(fileName);
});



module.exports = router;
