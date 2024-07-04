const { findUser } = require("../repositories/userRepository");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config/serverConfig");

console.log("JWT_SECRET:", JWT_SECRET); // Log JWT_SECRET to ensure it has a value

async function loginUser(authDetails) {
    try {
        console.log("Auth Details:", authDetails);
        const email = authDetails.email;
        const plainPassword = authDetails.password;

        const user = await findUser({ email });
        if (!user) {
            console.error("User not found:", email);
            throw { message: "No user found with the given email", statusCode: 404 };
        }

        const isPasswordValidated = await bcrypt.compare(plainPassword, user.password);
        if (!isPasswordValidated) {
            console.error("Password validation failed for user:", email);
            throw { message: "Invalid password, please try again", statusCode: 401 };
        }

        if (!JWT_SECRET) {
            console.error("JWT_SECRET is undefined");
            throw { message: "JWT_SECRET must have a value", statusCode: 500 };
        }

        const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: "3d" });
        return token;
    } catch (error) {
        console.error("Error in loginUser:", error);
        throw error;
    }
}

module.exports = {
    loginUser
};
