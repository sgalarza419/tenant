const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const landlordSchema = new Schema({
    username: String,
    address: String,
    thumbnail: String
});

const Landlord = mongoose.model('landlord',landlordSchema);

module.exports = Landlord;