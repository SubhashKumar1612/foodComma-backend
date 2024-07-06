const { loginUser } = require("../services/authService");

async function login(req, res) {
    console.log("hitting in the controller inside the login")
    try {
        const loginPayload = req.body;
        console.log(loginPayload)
        
        const response = await loginUser(loginPayload);

        res.cookie("authToken", response, {
            httpOnly: true,
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })


        return res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            data: {},
            error: {}
        })
    } catch(error) {
        const statusCode = error.statusCode || 500;  // Default to 500 if statusCode is undefined
        return res.status(500).json({
            success: false,
            data: {},
            message: error.message,
            error: error
        })
    }

}

module.exports = {
    login
}