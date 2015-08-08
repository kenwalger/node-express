var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('entry', { title: 'Data Entry' });
});

router.post('/', function (request, response, next) {
  var OS = request.body.OS;
  var osVersion = request.body.osVersion;
  var notes = request.body.notes;

  if (typeof OS == 'undefined') {
    next(Error('Please enter an Operating System'));
  }
  else if (typeof osVersion == 'undefined') {
    next(Error('Please enter an Operating System Version!'));
  }
  else {
    response.send(OS, osVersion, notes);
  }

});
module.exports = router;
