import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    scores: [
        {
            score: {
                type: Number,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]

});

const User = mongoose.model("User", userSchema);
export {User};