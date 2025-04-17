const { User } = require('../models');

const getUserByEmail = async (email, attributes, validateExistence = false) => {

    const user = await User.findOne({
        attributes,
        where: { email }
    });

    if (validateExistence && !user) {
        throw new Error('User not found');
    }

    return user;
};

const getUserById = async (id, attributes, validateExistence) => {

    const user = await User.findByPk(id, {
        attributes
    });

    if (validateExistence && !user) {
        throw new Error('User not found');
    }

    return user;
};

module.exports = {
    getUserByEmail,
    getUserById
}