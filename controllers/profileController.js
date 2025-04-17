const { getUserByEmail } = require('../helpers/userHelper');
const { success } = require('../helpers/response');
const UserResource = require('../resources/user');

const me = async (req, res) => {
    
    const user = await getUserByEmail(req.user.email, null, true);

    return res.send(success('', '', {
        user: UserResource.make(user)
    }));
};

const logout = (req, res) => {
    return res.send(success('Logout Success.', '', {}));
};

module.exports = {
    me,
    logout
};