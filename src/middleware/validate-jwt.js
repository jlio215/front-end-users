const jwt = require('jsonwebtoken')

const validateJWT = (req, res, next) => {
    const token = process.env.JWT
    if (!token) {
        return console.log('Error unauthorized')
    }
    try {
        const payload = jwt.verify(token, process.env.SECRET_JWT);
        req.payload = payload;
        return true
    } catch (error) {
        return false
    }
}

module.exports = {
    validateJWT
}