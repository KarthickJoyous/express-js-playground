const { required, validator } = require('../validator');

const emailPasswordValidator = () => [
    required('email')
        .isString().withMessage('Email must be a string')
        .isEmail().withMessage('Valid email is required'),
    required('password')
        .isString().withMessage('Password must be a string')
        .isLength({ min: 5, max: 20 }).withMessage('The password length must be between 5 and 20 characters')
];

const registerRequest = [
    validator([
        required('name')
        .isString().withMessage('Name should be a string'),
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