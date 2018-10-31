const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');


const profSchema = mongoose.Schema({
    profile: {
        name: String,
        email: String,
        Department: String,
        homepage: String,
        age: Number,
        nationality: String
    },
    rating: {
        param1: Float,
        param2: Float,
        param3: Float,
        param4: Float,
    }
    comments: {
        c: String,
    }
 });

const Professor = mongoose.model("Professor", profSchema);
 

module.exports = Professor;
