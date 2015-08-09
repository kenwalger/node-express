var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Sample' });
});

/* GET OS listing. */
router.get('/display', function(request, response) {
    console.log("Attempting to connect from index.js");
    var db = request.db;
    var collection = db.get('oscollection');
    collection.find({}, {}, function(e, docs){
        response.render('display', {
            title: 'Data Display',
            "oslist" : docs,
            os2 : "Windows",
            osVersion2 : "98",
            notes2 : "Are these still really out there?"
        });
    });
});

router.post('/display', function(request, response) {
    console.log("Attempting to connect from index.js");
    var db = request.db;
    var collection = db.get('oscollection');
    collection.find({}, {}, function(e, docs){
        response.render('display', {
            title: 'Data Display',
            "oslist" : docs
        });
    });
});

module.exports = router;
