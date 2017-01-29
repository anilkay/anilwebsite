var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express',
 // oyuncu:'Micov'
 // });//
    res.sendfile('views/about.html');
});

router.get('/hello', function(req, res,next){
    res.send("Buda başka bir sayfadır.");
});
router.get('/birsey',function (req,res,next) {
    res.render('anil');
})
router.get('/action_page',function (req,res,next) {
    var t=req.param('firstname');
    var k=req.param('lastname');
    res.render('action_page',{kaka:t});
})
router.get('/bim',function (req,res,next) {
    res.sendfile('views/neli.html');
})
router.get('/about',function (req,res,next) {
    res.sendfile('views/about.html');
})
module.exports = router;
