const logger = (req, res, next) => {
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const method = req.method;
    const contentType = req.header('Content-Type');
    console.log(`URL : ${fullUrl} | Method : ${method} | Content-Type : ${contentType}`);
    console.log("Body : ", req.body);
    next();
}

module.exports = {
    logger
};