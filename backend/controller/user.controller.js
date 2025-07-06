import { User } from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname,email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword
        });
        await createdUser.save();
        res.status(200).json({
            message: "User created successfully",
            user: {
                fullname: createdUser.fullname,
                email: createdUser.email
            }
        });
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid user or password" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid user or password" });
        }
        res.status(200).json({
            message: "Login successful",
            user: {
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const saveQuizScore = async (req, res) => {
    const { email, score } = req.body;

    if (!email || !score) {
        return res.status(400).json({ message: 'Email and score are required' });
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Add the new score
        user.scores.push({
            score: score
        });

        // Save the user with the updated scores
        await user.save();

        res.status(200).json({ message: 'Score saved successfully', user });
    } catch (error) {
        console.error('Error saving score:', error.message);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
};