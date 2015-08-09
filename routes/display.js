var express = require('express');
var router = express.Router();

/* GET OS listing. */
router.get('/display', function(request, response) {
    var db = request.db;
    var collection = db.get('oscollection');
    collection.find({}, {}, {}, function(e, docs){
        response.render('display', {
           "oslist" : docs
        });
    });
});

module.exports = router;
