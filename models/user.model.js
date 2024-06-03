const mongoose = require('mongoose');

// Define User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    // profilePicture: {
    //     type: String // You can store the path to the image file
    // },
    address: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zipCode: {
            type: String
        },
        country: {
            type: String
        }
    },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v); // Validate phone number format (e.g., 123-456-7890)
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    preferredLanguage: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export User model
const User = mongoose.model('User', UserSchema);
module.exports = User;
