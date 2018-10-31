const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');


const profSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });

const Professor = mongoose.model("Professor", profSchema);
 

module.exports = Professor;
