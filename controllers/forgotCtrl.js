const express = require('express');
const router = express.Router();

const forgotModal = require('../modals/forgotReset');

router.post('/', (req, res) => {
    forgotModal.findOne({'email': req.body.email}, (err, data) => {
        try {
            if(err) {
                throw new Error(err);
            } else {
                if(!data){
                    throw new Error('Invalid email, please try again');
                } else{
                    res.status(200).send({auth: true, data: data});
                }
            }
        } catch (error){
            res.status(401).send({auth: false, error: error.message});
        }
    });
});

module.exports = router;