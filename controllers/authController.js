const register = (req, res) => {
    return res.send({
        success: true,
        message: 'Registration Success.',
        data: {
            user: {
                name: req.body.name,
                email: req.body.email
            }
        }
    });
};

const login = (req, res) => {
    return res.send({
        success: true,
        message: 'Login Success.',
        data: {
            user: {
                name: req.body.name,
                email: req.body.email
            }
        }
    });
};

module.exports = {
    register,
    login
};