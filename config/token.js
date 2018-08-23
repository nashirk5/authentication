const jwt = require('jsonwebtoken');
const secret_key = "authe";

module.exports = {

    generateToken: function (id) {
        let token = jwt.sign({ 'id': id }, secret_key, { expiresIn: 18000 });
        return token;
    },

}