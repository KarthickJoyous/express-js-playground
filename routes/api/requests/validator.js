const { body } = require('express-validator');

const validator = (validations) => {

    return async (req, res, next) => {

        for (const validation of validations) {

            const result = await validation.run(req);

            if (!result.isEmpty()) {

                return res.status(422).send({
                    success: false,
                    message: result.array()[0]['msg'],
                    data: {}
                });
            }
        }

        next();
    };
};

const required = (field) => {

    return body(field).notEmpty().withMessage(`The ${field} field is required`);
}

module.exports = {
    validator,
    required
};