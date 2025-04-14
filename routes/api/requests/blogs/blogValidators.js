const { required, queryRequired, validator } = require('../validator');

const listBlogRequest = [
    validator([
        queryRequired('offset').isInt({ min: 0}).withMessage('The offset should be atleast 0'),
        queryRequired('limit').isInt({ min: 1, max: 20}).withMessage('The limit min 1, max 30.'),
        queryRequired('sort_by').isIn(['asc', 'desc']).withMessage('The selected sort by is invalid. Supported asc, desc.'),
    ])
];

const createBlogRequest = [
    validator([
        required('title').isLength({ min: 10, max: 150 }).withMessage('The title length must be between 10 and 150 characters')
    ])
];

module.exports = {
    listBlogRequest,
    createBlogRequest
};