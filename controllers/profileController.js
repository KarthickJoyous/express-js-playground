const { getUserByEmail } = require('../helpers/userHelper');

const me = async (req, res) => {

    return res.send({
        success: true,
        message: '',
        data: {
            user: await getUserByEmail(req.user.email)
        }
    });
};

const logout = (req, res) => {
    return res.send({
        success: true,
        message: 'Logout Success.',
        data: {}
    });
};

module.exports = {
    me,
    logout
};