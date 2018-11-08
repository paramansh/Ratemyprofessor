const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');


const profSchema = mongoose.Schema({
    id:  { type: String, unique: true }, //IITK username (currently cse username)
    profile: {
        name: String,
        email: String, // email and homepage from ID
        department: String,
        homepage: String,
    },
    courses: [String],
    rating: {
        numRatings: Number,
        param1: Number,
        param2: Number,
        param3: Number,
        param4: Number,
    },
    comments: [String]
 });

const Professor = mongoose.model("Professor", profSchema);
 

module.exports = Professor;
