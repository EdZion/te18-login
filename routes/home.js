var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
  res.render('index',{title: 'Topsecret'})
});

/* GET Home */
router.get('/', function(req, res, next) {
  if (req.session.loggedin){
    res.send('Du är inloggad');
  } else{
    resizeBy.send('Please login to view this page!');
  }
});

module.exports = router;
