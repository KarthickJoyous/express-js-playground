const db = require('../config/db');
const hash = require('../helpers/hash');
const { generateToken } = require('../helpers/jwt');
const { getUserByEmail } = require('../helpers/userHelper');

const register = async (req, res) => {

    try {

        const { email } = req.body;

        const [emailExists] = await db.query(`select id from users where email = '${email}' limit 1`);

        if (emailExists[0]?.id) {
            throw new Error(`Email (${email}) already exists`);
        }

        const { name, password } = req.body;

        const [user] = await db.query(`insert into users (name, email, password) values ('${name}', '${email}', '${hash.make(password)}')`);

        if (!user.affectedRows) {
            throw new Error('Registration failed. Please try again.');
        }

        const registeredUser = await getUserByEmail(email);

        return res.send({
            success: true,
            message: 'Registration Success.',
            data: {
                user: registeredUser,
                token: generateToken({ id: registeredUser.id, email })
            }
        });

    } catch (err) {

        return res.send({
            success: false,
            message: err.message,
            data: {}
        });
    }
};

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const [user] = await db.query(`select id, name, password from users where email = '${email}' limit 1`);

        const hashedPassword = user[0]?.password;

        if (!hashedPassword) {
            throw new Error("Invalid email");
        }

        if (!hash.check(password, hashedPassword)) {
            throw new Error("Password incorrect");
        }

        const loggedInUser = await getUserByEmail(email);

        return res.send({
            success: true,
            message: 'Login Success.',
            data: {
                user: loggedInUser,
                token: generateToken({ id: loggedInUser.id, email })
            }
        });

    } catch (err) {
        return res.send({
            success: false,
            message: err.message,
            data: {}
        });
    }
};

module.exports = {
    register,
    login
};