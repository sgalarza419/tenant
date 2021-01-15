const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const residentSchema = new Schema({
    username: String,
    address: String,
    roomnumber: Number,
    thumbnail: String
});

const Resident = mongoose.model('resident',residentSchema);

module.exports = Resident;