const express = require('express');
const router = express.Router();

require('../config/db');

const register = require('../controllers/registerCtrl');
const login = require('../controllers/loginCtrl');
const forgot = require('../controllers/forgotCtrl');
const reset = require('../controllers/resetCtrl');

router.get('/', (req, res) => {
    res.json({message: 'API works'});
});

router.use('/register', register);

router.use('/login', login);

router.use('/forgot', forgot);

router.use('/reset', reset);

module.exports = router;