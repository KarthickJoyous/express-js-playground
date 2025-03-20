const tokenValidator = (req, res, next) => {

    console.log(`Header Token : ${req.headers.token}`);
    
    if(! req.headers.token) {
        return res
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