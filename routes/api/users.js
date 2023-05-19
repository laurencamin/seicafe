// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn.js');

// POST /api/users
router.post('/', usersCtrl.create);

//POST 
router.post('/login', usersCtrl.login);


module.exports = router;
