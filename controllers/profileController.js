const me = (req, res) => {
    return res.send({
        success: true,
        message: '',
        data: {
            user: {
                name: req.query.name,
                email: req.query.email
            }
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