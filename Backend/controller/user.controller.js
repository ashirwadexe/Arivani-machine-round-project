import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../model/user.model.js";

//REGISTRATION Logic
export const register = async (req, res) => {
    try {
        const { name, email, password, phone, address} = req.body;
        if(!name || !email || !password || !phone || !address) {
            return res.status(400).json({
                message: "Something is missing!!!",
                success: false
            });
        }

        //here we are finding the user using his email
        const user = await User.findOne({email});

        //if user found-> user ka pahle se account h
        if(user) {
            return res.status(400).json({
                message: "user already exits !",
                success: false
            });
        }

        //securing password by converting it into hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create=ing new users account here 
        await User.create({
            name, 
            email, 
            password: hashedPassword,
            phone,
            address
        });

        return res.status(200).json({
            message: "Account Created Successfully",
            success: true
        });

    } catch (error) {
        console.error("Error during registration:", error);
    
        return res.status(500).json({
          message: "Server error. Please try again later.",
          success: false,
        });
      }
};

//USER LOGIN Logic
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        //checking if any of both is missing
        if(!email || !password) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        //checking password correct or not
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if(!isPasswordMatched) {
            return res.status(400).json({
                message: "Incorrect Password",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: '1d'});

        user = {
            _id: user._id,
            name: user.name,
            email: user.email
        }

        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpsOnly: true, sameSite: 'strict'}).json({
            //when login we will get message with "Welcome NAME !!!"
            message: `Welcome ${user.name} !!!`,
            success: true,
            user
        });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

//USER LOGOUT logic
export const logout = async (req, res) => {
    try {

        //yaha pe jo
        return res.status(200).cookie("token", "", {maxAge: 0}).json({
            message: "User Logged Out",
            success: true
        });
    } catch (error) {
        console.log("Logout error: ", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};