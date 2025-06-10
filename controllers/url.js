const { nanoid } = require('nanoid'); // Importing nanoid for generationg of shortened urls
const Url = require('../models/url'); // Importing the Url model

// This function handles the creation of a shortened URL
exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body; // Taking url from request body
    const shortId = nanoid(7); // Generating a unique short ID of length 7

    const newUrl = new Url({ originalUrl, shortId }); // Creating a new Url document
    await newUrl.save(); // Saving the document to the database

    res.json({ shortUrl: `http://localhost:3000/${shortId}` }); // Responding with the shortened URL
}; 

// This function handles the retrieval of the original URL from a shortened URL
exports.redirectUrl = async (req, res) => {
    const urlEntry = await Url.findOne({ shortId: req.params.shortId }); // Finding the URL entry by shortId

    if (urlEntry) {
        // Add visit history
        urlEntry.visitHistory.push({ timestamp: new Date.now() }); // Adding a timestamp to the visit history array
        await urlEntry.save(); // Saving the updated URL entry to the database

        res.redirect(urlEntry.originalUrl); // Redirecting to the original URL
    } else {
        res.status(404).json({ error: 'Shortened URL not found' }); // Error handling
    }
};

// This function retrieves the visit history for a shortened URL
exports.getVisitHistory = async (req, res) => {
    const urlEntry = await Url.findOne({ shortId: req.params.shortId }); // Finding the URL entry by shortId

    if (urlEntry) {
        res.json({ visitHistory: urlEntry.visitHistory }); // Responding with the visit history
    } else {
        res.status(404).json({ error: 'Shortened URL not found' }); // Error handling
    }
};