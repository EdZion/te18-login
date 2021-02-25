var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get('/', function(req, res, next){
  res.render('index',{title: 'Schoolsoft'})
});

router.post('/logout', AuthController.destroy);

module.exports = router;
