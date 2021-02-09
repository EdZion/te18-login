var express = require('express');
var router = express.Router();

/* GET Login */
router.get('/', function(req, res, next) {
  res.render('login',{title: 'Schoolsoft'});
});

/*  POST Login */
router.post('/', function(req, res, next) {

  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;

  if (password == "abc123"){
    res.send('Hemligt');
  } else{
    res.redirect('/login');
  }
});

module.exports = router;
