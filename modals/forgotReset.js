const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('forgot', userSchema, 'users');