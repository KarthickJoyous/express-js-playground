const tokenValidator = (req, res, next) => {

    console.log(`Header Token : ${req.headers.token}`);
    
    if(! req.headers.token) {
        res
        .status(401)
        .send({
            success: false,
            message: 'Token header required',
            data: {}
        });
    }

    next();
};

module.exports = {
    tokenValidator
}