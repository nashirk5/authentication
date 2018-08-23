const express = require('express');
const router = express.Router();

const userModal = require('../modals/login');
const tokenFn = require('../config/token');

router.post('/', (req, res) => {
    userModal.findOne({ 'username': req.body.username }, (err, data) => {
        try {
            if (err) {
                throw new Error(err);
            } else {
                if (!data) {
                    throw new Error('Invalid username');
                } else {
                    if(req.body.password == data.password) {
                        let token = tokenFn.generateToken(data._id);
                        res.status(200).send({ auth: true, data: [{token: token}] });
                    } else {
                        throw new Error("Invalid password");
                    }
                }
            }
        } catch (error) {
            res.status(401).send({ auth: false, message: error.message });
        }
    });
});

module.exports = router;