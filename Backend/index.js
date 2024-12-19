import express from "express";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"
const app = express();
const PORT = 3000;

//dotenv loads variables from the .env files
dotenv.config();

//helping to make cookies accessible to route
app.use(cookieParser());

//this middleware converting the josn data into js cpde
app.use(express.json());


//api's
app.use("/api/v1/user", userRoute);







app.listen(PORT, (req, res) => {
    connectDB();
    console.log(`app is listening on PORT ${PORT}`);
});