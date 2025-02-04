
const jwt = require("jsonwebtoken");

const ManagerAuth = (req, res, next) => {
    let token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ msg: "Token not found" });
    }

    let newToken = token.slice(7, token.length); // Extract the token from "Bearer <token>" format

    try {
        // Try verifying with manager's key first
        let decoded = jwt.verify(newToken, "def");
        req.user = decoded;
        next(); // Proceed to the next middleware
    } catch (err) {
        try {
            // If manager's key fails, try verifying with admin's key
            let decoded = jwt.verify(newToken, "abc");
            req.user = decoded;
            next(); // Proceed to the next middleware
        } catch (err) {
            // If both verifications fail, reject the request
            return res.status(403).json({ msg: "Invalid token" });
        }
    }
};

module.exports = ManagerAuth;
