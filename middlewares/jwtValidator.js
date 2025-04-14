const { validateToken } = require('../helpers/jwt');

const jwtValidator = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            throw new Error('Unauthorized');
        }

        const user = validateToken(token);

        if (!user) {
            throw new Error('Unauthorized');
        }

        req.user = user;

        next();

    } catch (err) {
        return res
            .status(401)
            .send({
                success: false,
                message: err.message ? err.message : 'Unauthorized',
                data: {}
            });
    }
};

module.exports = {
    jwtValidator
}