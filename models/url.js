const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },// That url which is to be shortened 
    shortId: { type: String, required: true, unique: true }, // Shortened version of given url
    createdAt: { type: Date, default: Date.now }, // At which time, url is created
    visitHistory: [{ timestamp: { type: Date, default: Date.now } }] // Track visits
});

module.exports = mongoose.model('Url', urlSchema); // Exporting the model for use