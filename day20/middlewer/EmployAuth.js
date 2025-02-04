const jwt = require("jsonwebtoken");

const EmployAuth = (req, res, next) => {
    let token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ msg: "Token not found" });
    }

    let newToken = token.slice(7, token.length); // Extract the token from "Bearer <token>" format

    try {
        // Try verifying with the employee's key
        let decoded = jwt.verify(newToken, "ghi"); // Employee key
        req.user = decoded;
        next(); // Proceed to the next middleware
    } catch (err) {
        try {
            // If employee's key fails, try verifying with the manager's key
            let decoded = jwt.verify(newToken, "def"); // Manager key
            req.user = decoded;
            next(); // Proceed to the next middleware
        } catch (err) {
            try {
                // If manager's key fails, try verifying with the admin's key
                let decoded = jwt.verify(newToken, "abc"); // Admin key
                req.user = decoded;
                next(); // Proceed to the next middleware
            } catch (err) {
                // If all verifications fail, reject the request
                return res.status(403).json({ msg: "Invalid token" });
            }
        }
    }
};

module.exports = EmployAuth;