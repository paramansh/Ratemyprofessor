const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');


const profSchema = mongoose.Schema({
    id:  { type: String, unique: true },
    profile: {
        name: String,
        email: String,
        // Department: String,
        // homepage: String,
        // age: Number,
        // nationality: String
    },
    rating: {
        param1: Number,
        param2: Number,
        param3: Number,
        param4: Number,
    }
    // comments: {
    //     c: String,
    // }
 });

const Professor = mongoose.model("Professor", profSchema);
 

module.exports = Professor;
