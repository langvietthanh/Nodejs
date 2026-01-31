const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Tạo Schema cho Course
const Course = new Schema ({
    name: {type: String, maxLength: 600},
    description: {type: String, maxLength: 600},
    img: {type: String, maxLength: 600},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Course', Course);