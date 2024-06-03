const mongoose = require('mongoose');

// Define Product Schema
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    imageUrl: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String]
    },
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export Product model
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
