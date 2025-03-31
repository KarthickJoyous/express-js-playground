const db = require('../config/db');

const getUserByEmail = async (email) => {

    const [result] = await db.query(`select id, name, email from users where email = '${email}'`);

    const user = result[0];

    if (!user) {
        throw new Error('User not found');
    }

    return user;
};

const getUserById = async (id) => {

    const [result] = await db.query(`select id, name, email from users where id = '${id}'`);

    const user = result[0];

    if (!user) {
        throw new Error('User not found');
    }

    return user;
};

module.exports = {
    getUserByEmail,
    getUserById
}