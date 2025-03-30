const bcrypt = require('bcrypt');
const saltRounds = 10;

const make = (password) => {

    return bcrypt.hashSync(password, saltRounds);
}

const check = (password, hash) => {

    return bcrypt.compareSync(password, hash);
}

module.exports = {
    make,
    check
}