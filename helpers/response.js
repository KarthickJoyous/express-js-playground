module.exports = {
    success(message, code, data) {
        return {
            success: true,
            message,
            code,
            data
        };
    },

    error(message, code) {
        return {
            success: false,
            message,
            code,
            data: {}
        };
    }
};
