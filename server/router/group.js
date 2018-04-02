const express = require('express');
const router = express.Router();
const mysql=require("../mysql");

router.post('/test', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "insert into `goods` set ?";
    mysql(str,req.body,function(results){
        res.send("成功")
    })
});

router.post('/good', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `goods`";
    mysql(str,[],function(results){
        res.json(results)
    })
});
router.post('/info', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `goods` where id=?";
    console.log(req.body.id)
    mysql(str,[req.body.id],function(results){
        res.send("成功")
    })
});

module.exports = router;