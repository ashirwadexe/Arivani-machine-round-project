import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(404).json({
                message: "User is not authenticated", 
                success: false
            });
        }

        //decoding and verifying the jwt token here
        const decode = await jwt.verify(token, process.env.SECRET_KEY);

        if (!decode) {
            return res.status(400).json({
                message: "Invalid token", 
                success: false
            });
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
}

export default isAuthenticated;


