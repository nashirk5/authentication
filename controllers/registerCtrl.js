const express = require('express');
const router = express.Router();

const registerModal = require('../modals/users');

router.post('/', (req, res) => {var userData = req.body;
    var newUser = new registerModal;

    newUser.username = userData.username;
    newUser.password = userData.password;
    newUser.email = userData.email;

    registerModal.findOne({'username': userData.username}, (err, data) => { 
        try {   
            if(err){
                throw new Error(err);
            } else {
                if(data) {
                    res.status(409).send({auth: false, error: 'Username already exist'});
                } else {
                    newUser.save((err2, data2) => {
                        if(err){
                            throw new Error(err2);
                        } else {
                            res.status(200).send({auth: true, data: data2});
                        }
                    });
                }
            }
        } catch (error) {
            res.status(401).send({autho: false, error: error.message});
        }
    });
});

module.exports = router;