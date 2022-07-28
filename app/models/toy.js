const mongoose = require('mongoose')

// toy is a subdoc, not a model
// toy will be part of the toys array added to specific pets

// we don't need to get the model from mongoose, so we're going to save a lil real estate in our file and skip destructuring in favor of the regular syntax
const toySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    name: {
        type: String,
        default: false,
        required: true
    },
    condition: {
        type: String,
        // here we're going to use enum, which means we can only use specific strings to satisfy this field
        // enum is a validator on the type String, that says "you can only use one of these values"
        enum: ['new', 'used', 'disgusting'],
        default: 'new'
    }
}, {
    timestamps: true
})

module.exports = toySchema