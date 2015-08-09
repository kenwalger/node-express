var express = require('express');
var router = express.Router();

/* GET OS listing. */
router.get('/display', function(request, response) {
    console.log("Attempting to connect to db from display.js");
    var db = request.db;
    var collection = db.get('oscollection');
    collection.find({}, {}, {}, function(e, docs){
        response.render('display', {
           "oslist" : docs,
            os2 : "Windows",
            osVersion2 : "98",
            notes2 : "Are these still really out there?"
        });
    });
});

module.exports = router;
