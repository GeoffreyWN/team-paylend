const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: { type: String, required: true},
    lname: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    gender: { type: String, required: true},
    dob: { type: Date, required: true},
    password: { type: String, required: true},
    created_at: { type: Date, default: Date.now }
})

const User = mongoose.model('user', UserSchema)

module.exports = User