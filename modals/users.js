const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    creation: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userSchema, 'users');