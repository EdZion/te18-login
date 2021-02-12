const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { query } = require('../models/db');

/* GET Login */
router.get('/', function(req, res, next) {
  res.render('login', {title: 'Schoolsoft'});
});

/*  POST Login */
router.post('/', function(req, res, next) {

  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;

  if (password == "abc123"){
    req.session.loggedin = true;
    req.session.username = username;
    res.redirect('/topsecret');
  } else{
    res.render('login', {title :'Schoolsoft', error :'FEL!'});
  }
});
/*  GET skapa en hash */
router.get('/kryptan/:pwd', function(req, res, next) {
  const myPlaintextPassword = req.params.pwd;

  bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
    res.json({
      pwd: hash
    });
    // Store hash in your password DB.
  });

});


module.exports = router;
