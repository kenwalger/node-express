var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('entry', { title: 'Data Entry' });
});

module.exports = router;
