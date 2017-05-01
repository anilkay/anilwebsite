var express = require('express');
var router = express.Router();
var app=express();
var requistfy= require('requestify');

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
router.get('/isprime',function (req,res,next) {
    res.sendfile('views/isitprime.html');
})
router.get('/sendtweet',function (req,res) {
    res.sendfile('views/twitter.html');
});
router.get('/wikipedia:name',function (req,res) {
        requistfy.request("https://en.wikipedia.org/wiki/"+req.params.name, {
            method: 'GET',
        }).then(function (res2) {
            res.send('<h1>Mevzu Tamam</h1><p></p>'+JSON.stringify(res2.getBody())+"</p>");

        });
});
module.exports = router;
