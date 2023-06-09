import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTER USER
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!regex.test(password)) {
            throw new Error("Password must be of minimum 8 characters, must contain an uppercase letter, lowercase letter, a number and a special character.");
        }
        
        const salt = await bcrypt.genSalt();
        const passHash = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: 0,
            impressions: 0
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch(err) {
        res.status(500).json({error: err.message});
    }
}


// LOGIN USER
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if (!user) return res.status(404).json({msg: "User does not exist."});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg: "Invalid credentials."});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});



    } catch(err) {
        res.status(500).json({error: err.message})
    }
}