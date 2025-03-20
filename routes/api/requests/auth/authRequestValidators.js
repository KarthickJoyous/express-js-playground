const { required, validator } = require('../validator');

const emailPasswordValidator = () => [
    required('email')
        .isEmail().withMessage('Valid email is required'),
    required('password')
        .isLength({ min: 5, max: 20 }).withMessage('The password length must be between 5 and 20 characters')
];

const registerRequest = [
    validator([
        required('name'),
        ...emailPasswordValidator()
    ])
];

const loginRequest = [
    validator([
        ...emailPasswordValidator()
    ])
];

module.exports = {
    registerRequest,
    loginRequest
};