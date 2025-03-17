const home = (req, res) => {
    res.send({
        success: true,
        message: "Welcome to blogs",
        data: {}
    });
}

module.exports = {
    home
};