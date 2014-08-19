var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', { title: 'Derp-Bear Angular' });

});

module.exports = router;
