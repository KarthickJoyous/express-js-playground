const { User } = require('../models');
const hash = require('../helpers/hash');
const { generateToken } = require('../helpers/jwt');
const { getUserByEmail } = require('../helpers/userHelper');
const { success, error } = require('../helpers/response');
const UserResource = require('../resources/user');

const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const userExists = await getUserByEmail(email, [
            'id'
        ]);

        if (userExists) {
            throw new Error(`Email (${email}) already exists`);
        }

        const user = await User.create({
            name,
            email,
            password: `${hash.make(password)}`
        });

        if (!user) {
            throw new Error('Registration failed. Please try again.');
        }

        return res.send(success('Registration Success.', '', {
            user: UserResource.make(user),
            token: generateToken({ id: user.id, email })
        }));

    } catch (err) {

        return res.send(error(err.message, 500));
    }
};

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await getUserByEmail(email, null, true);

        if (!hash.check(password, user.password)) {
            throw new Error("Password incorrect");
        }

        return res.send(success('Login Success.', '', {
            user: UserResource.make(user),
            token: generateToken({ id: user.id, email })
        }));

    } catch (err) {
        return res.send(error(err.message, 500));
    }
};

module.exports = {
    register,
    login
};