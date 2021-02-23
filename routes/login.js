const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { query } = require('../models/db');
const { body, validationResult } = require('express-validator');
const AuthController = require('../controllers/AuthController');

/* GET login form */
router.get('/', AuthController.show);

/* GET skapa en hash */
router.get('/kryptan/:pwd', function(req, res, next) {

  const myPlaintextPassword = req.params.pwd;

  bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
    // Store hash in your password DB.
    res.json({
      pwd: hash
    });
  });


});

/* POST login */
router.post('/',
body('username').notEmpty().trim(),
body('password').notEmpty(),
AuthController.store
);


module.exports = router;