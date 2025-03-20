const home = (req, res) => {
    return res.send({
        success: true,
        message: "Welcome to blogs",
        data: {}
    });
}

module.exports = {
    home
};