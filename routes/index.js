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
            "oslist" : docs
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
