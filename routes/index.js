var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Sponsor', function(req, res, next) {
  res.render('sponsor', { title: 'Express' });
});


module.exports = router;
